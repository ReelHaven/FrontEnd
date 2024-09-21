import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {catchError, Observable, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {

  /**
   * @property httpOptions
   * @description
   * HTTP headers for the requests. The content type is set to Json
   */
  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  /**
   * @property http
   * @description
   * HTTP client for making requests to the server (API)
   */
  protected http: HttpClient = inject(HttpClient);

  /**
   * @property basePath
   * @description
   * Base path for the server (API).
   * This is the base URL for the API
   */
  protected basePath: string = `${environment.serverBasePath}`;

  /**
   * @property resourceEndpoint
   * @description
   * The endpoint for the resource.
   * This is the endpoint for the resource
   */
  protected resourceEndpoint: string = '/resources';

  /**
   * @method HandleError
   * @param {HttpErrorResponse} error - The error response from the server
   * @description
   * Handles the error response from the server.
   * It logs the error to the console and returns an error message
   */
  protected handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      console.error(`An error occurred:, ${error.error.message}`);
    } else {
      console.error(`Backend returned code ${error.status}, `
        + `body was: ${error.error}`);
    }
    return throwError(() => new Error('Something bad happened; ' +
      'please try again later.'));
  }

  /**
   * @method resourcePath
   * @description
   * Build anda returns the full path for the resource
   * @returns {string} - The full path for the resource
   */
  protected resourcePath(): string {
    return `${this.basePath}${this.resourceEndpoint}`;
  }

  /**
   * @method getAll
   * @description
   * Gets all the resources from the server
   * @returns {Observable<Array<T>>} - An observable array of the resources
   */
  public getAll(): Observable<Array<T>> {
    return this.http.get<Array<T>>(this.resourcePath(),
      this.httpOptions).pipe(retry(2),
      catchError(this.handleError));
  }

  /**
   * @method create
   * @description
   * Create a new resource on the server
   * @param {any} item - The resource to be created
   * @returns {Observable<T>} - An observable of the created resource
   */
  public create(item: any): Observable<T> {
    return this.http.post<T>(this.resourcePath(),JSON.stringify(item),
      this.httpOptions).pipe(retry(2),
      catchError(this.handleError));
  }

  /**
   * @method update
   * @description
   * Updates a resource on the server
   * @param {any} id - The id of the resource to be updated
   * @param item - The resource to be updated
   * @returns {Observable<T>} - An observable of the updated resource
   */
  public update(id: any, item: any): Observable<T> {
    return this.http.put<T>(`${this.resourcePath()}/${id}`,
      JSON.stringify(item),
      this.httpOptions).pipe(retry(2),
      catchError(this.handleError));
  }

  /**
   * @method delete
   * @description
   * Deletes a resource from the server
   * @param {any} id - The id of the resource to be deleted
   * @returns {Observable<any>} - An observable of the deleted resource
   */
  public delete(id: any): Observable<any> {
    return this.http.delete(`${this.resourcePath()}/${id}`,this.httpOptions)
      .pipe(retry(2),catchError(this.handleError));
  }
}

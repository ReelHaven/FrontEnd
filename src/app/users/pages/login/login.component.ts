import { Component } from '@angular/core';
import {ToolbarLoginComponent} from "../../../public/components/toolbar-login/toolbar-login.component";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {DataRowOutlet} from "@angular/cdk/table";
import {Router, RouterLink} from "@angular/router";
import {LoginService} from "../../services/login.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ToolbarLoginComponent,
    MatCard,
    MatCardTitle,
    MatCardContent,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatButton,
    MatLabel,
    DataRowOutlet,
    RouterLink,
    FormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  errorMessage: string = '';

  constructor(private loginService: LoginService, private router: Router) { }

  onSubmit(form: NgForm){
    const username = form.value.username;
    const password = form.value.password;

    this.loginService.authenticateUser(username, password).subscribe({
      next: (users) =>{
        if(users.length > 0){
          console.log('User authenticated');

          const currentUser = users[0];

          localStorage.setItem('currentUser', JSON.stringify(currentUser));
          console.log('Current user info: ', currentUser);
          // add user to local storage, need to add this
          // already added
          this.router.navigate(['/mood']).then(r => console.log('Navigated to mood form'));
        }else{
          console.log('User credentials are incorrect');
          this.errorMessage = 'User credentials are incorrect, please try again';
          form.reset();
        }
      },
      error: (error) => {
        console.log('Error occurred while authenticating user: ', error);
        this.errorMessage = 'Error occurred while authenticating user';
      }
    });

  }

}

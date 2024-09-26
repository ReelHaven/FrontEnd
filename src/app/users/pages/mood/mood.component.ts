import { Component } from '@angular/core';
import {ToolbarLoginComponent} from "../../../public/components/toolbar-login/toolbar-login.component";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {FormsModule, NgForm} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {Router} from "@angular/router";
import {LoginService} from "../../services/login.service";
import {TranslateModule} from "@ngx-translate/core";

interface Feeling {
  value: string,
  viewValue: string
}

interface Objective {
  value: string,
  viewValue: string
}

interface Category {
  value: string,
  viewValue: string
}

@Component({
  selector: 'app-mood',
  standalone: true,
  imports: [
    ToolbarLoginComponent,
    MatCard,
    MatCardContent,
    MatFormField,
    MatLabel,
    MatSelect,
    FormsModule,
    MatOption,
    NgForOf,
    MatCardTitle,
    MatButton,
    TranslateModule
  ],
  templateUrl: './mood.component.html',
  styleUrl: './mood.component.css'
})
export class MoodComponent {

  feelings: Feeling[] = [
    {value: 'relajado', viewValue: 'Relajado'},
    {value: 'ansioso', viewValue: 'Ansioso'},
    {value: 'cansado', viewValue: 'Cansado'},
    {value: 'motivado', viewValue: 'Motivado'}
  ];

  objectives: Objective[] = [
    {value: 'relajarme', viewValue: 'Relajarme'},
    {value: 'desconectar', viewValue: 'Desconectar'},
    {value: 'inspirarme', viewValue: 'Inspirarme'},
    {value: 'aprender', viewValue: 'Aprender'}
  ];

  categories: Category[] = [
    {value: 'comedia', viewValue: 'Comedia'},
    {value: 'fantasia', viewValue: 'Fanstasía'},
    {value: 'aventura', viewValue: 'Aventura'},
    {value: 'drama', viewValue: 'Drama'}
  ];

  user: any;
  constructor(private router: Router, private loginService: LoginService) {
    const currentUser = localStorage.getItem('currentUser');
    this.user = currentUser ? JSON.parse(currentUser) : null;
  }

  updateUserEmotions(){

  }

  increaseUserFeeling(feeling: string){
    //console.log("emocion seleccionada aumentada: ",this.user.emotions(feeling))
    this.user.emotions[feeling] +=1;
    localStorage.setItem('currentUser', JSON.stringify(this.user));

    this.loginService.update(this.user.id, this.user)
      .subscribe(r=>console.log("User emotions updated in database"));

  }




  onSubmit(form: NgForm){
    if(form.valid){
      const moodValues = {
        feeling: form.value.feeling,
        objective: form.value.objective,
        category: form.value.category
      }
      this.increaseUserFeeling(moodValues.feeling);
      ///this.user.emotions[form.value.feeling] +=1;

      localStorage.setItem('moodValues', JSON.stringify(moodValues));
      console.log("Current mood values:", moodValues);
      this.router.navigate(['/home']).then(r=>console.log("Navigated to home"));
    }
  }
}


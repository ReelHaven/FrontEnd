import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ToolbarLoginComponent} from "../../../public/components/toolbar-login/toolbar-login.component";
import {FormsModule, NgForm} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import {MatOption, provideNativeDateAdapter} from "@angular/material/core";
import {MatIcon} from "@angular/material/icon";
import {MatSelect} from "@angular/material/select";
import {RegisterService} from "../../services/register.service";
import {Citizen} from "../../model/citizen/citizen.entity";
import {provideHttpClient} from "@angular/common/http";
import {NgForOf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";

interface Type {
  value: string,
  viewValue: string
}

interface memberships {
  value: string,
  viewValue: string
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ToolbarLoginComponent,
    FormsModule,
    MatButton,
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatFormField,
    MatInput,
    MatLabel,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepicker,
    MatHint,
    MatIcon,
    MatDatepickerModule,
    MatSelect,
    MatOption,
    NgForOf,
    RouterLink,
    TranslateModule
  ],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  types: Type[] = [
    {value: 'citizen', viewValue: 'Citizen'},
    {value: 'creator', viewValue: 'Creator'}
  ];

  memberships: memberships[] = [
    {value: 'standard', viewValue: 'Standard'},
    {value: 'premium', viewValue: 'Premium'},
    {value: 'platinum', viewValue: 'Platinum'}
  ];

  constructor(private registerService: RegisterService, private router: Router) {}

  onSubmit(form: NgForm) {
    if(form.valid){
      const newCitizen =new Citizen(
        form.value.name,
        form.value.lastName,
        form.value.userName,
        form.value.birthDate,
        form.value.phone,
        form.value.type,
        form.value.email,
        form.value.password,
        form.value.membership
      );

      this.registerService.create(newCitizen).subscribe({
        next: (response) => {
          console.log('Citizen registered:', response);
          form.reset();
          this.router.navigate(['/login']).then(r => console.log('Navigated back to login'));
        },
        error: (err) => {
          console.error('Error during registering:', err);
        }
      });
    }
  }


}

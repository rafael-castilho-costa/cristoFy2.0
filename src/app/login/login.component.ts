import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone:true,
  imports:[ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public form:FormGroup

  constructor(private formBuilder:FormBuilder) {
    this.form=this.formBuilder.group({
      email:[null,[Validators.required,Validators.email]],
      password:[null,[Validators.required, Validators.minLength(6)]]
    })
  }
  public get formControls(){
    return this.form.controls
  }
public login() {
    console.log(this.form.getRawValue())
}
}

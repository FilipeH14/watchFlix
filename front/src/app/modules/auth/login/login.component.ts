import { Component, OnInit } from '@angular/core'

import { AuthService } from '../../../shared/services/auth.service'

import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLoginForms: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(
    private router: Router,
    private auth: AuthService) { }

  ngOnInit(): void {
    
  }

  authUser(): void {
    this.auth.toLogin(
      this.userLoginForms.value.email, 
      this.userLoginForms.value.password
    )
  }

}

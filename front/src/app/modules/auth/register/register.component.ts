import { Component, OnInit } from '@angular/core'

import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'

import { AuthService } from 'src/app/shared/services/auth.service'

import { User } from '../../../shared/models/user'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userRegisterForms: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {

  }

  registerUser(): void {

    let user: User = this.userRegisterForms.value

    this.auth.toRegisterUser(user)

    // console.log(user)
  }

  cancelRegister(): void {
    console.log('cancelar o cadastro')
  }

}

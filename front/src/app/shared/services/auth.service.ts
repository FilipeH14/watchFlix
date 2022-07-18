import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public token?: string

  constructor(
    private router: Router
  ) { }

  public toRegisterUser(user: User): void {
    console.log(`Chegamos até o serviço cadastro ${user}`)

    const auth = getAuth()

    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then(resp => console.log(resp))
      .catch((error: Error) => console.log(error))
  }

  public toLogin(email: string, password: string): void {

    const auth = getAuth()
    const user = auth.currentUser

    signInWithEmailAndPassword(auth, email, password)
      .then(
        (response: any) => {
          user?.getIdToken()
            .then((userToken: string) => {
              this.token = userToken
              this.router.navigate(['home'])
            })
        }
      )
      .catch((error: Error) => console.log(error))
  }

}

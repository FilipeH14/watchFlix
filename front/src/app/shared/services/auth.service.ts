import { Injectable } from '@angular/core'

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public toRegisterUser(user: User): void {
    console.log(`Chegamos até o serviço cadastro ${user}`)

    const auth = getAuth()

    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then(resp => console.log(resp))
      .catch((error: Error) => console.log(error))
  }

  public toLogin(email: string, password: string): void {
    console.log(`Chegamos até o serviço login email: ${email}`)
    console.log(`Chegamos até o serviço login senha: ${password}`)

    const auth = getAuth()

    signInWithEmailAndPassword(auth, email, password)
      .then(resp => console.log(resp))
      .catch((error: Error) => console.log(error))
  }

  constructor() { }
}

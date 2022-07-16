import { Injectable } from '@angular/core'

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public toRegisterUser(user: User): void {
    console.log(`Chegamos até o serviço ${user}`)

    const auth = getAuth()

    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then(resp => console.log(resp))
      .catch((error: Error) => console.log(error))
  }

  constructor() { }
}

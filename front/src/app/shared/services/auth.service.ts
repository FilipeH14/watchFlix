import { Injectable } from '@angular/core'

import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public toRegisterUser(user: User): void {
    console.log(`Chegamos até o serviço ${user}`)
  }

  constructor() { }
}

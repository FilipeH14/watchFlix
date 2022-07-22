import { Component } from '@angular/core'

import { AuthService } from '../../shared/services/auth.service'

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Observable } from 'rxjs'
import { map, shareReplay } from 'rxjs/operators'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    )

  constructor(
    private breakpointObserver: BreakpointObserver,
    private auth: AuthService
    ) {}

  public logout(): void {
    this.auth.toLogout()
  }

}

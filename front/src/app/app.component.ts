import { Component, OnInit } from '@angular/core'

import * as firebase from 'firebase/app'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'front'

  ngOnInit(): void {
    
    const firebaseConfig = {
      apiKey: "AIzaSyC41lkYW2ssl1ThfaJe059MrAH_-9b5wcI",
      authDomain: "wacthflix.firebaseapp.com",
      projectId: "wacthflix",
      storageBucket: "wacthflix.appspot.com",
      messagingSenderId: "744031875195",
      appId: "1:744031875195:web:681f770eaeee2cd31e72de"
    }

    const app = firebase.initializeApp(firebaseConfig)
  }
}

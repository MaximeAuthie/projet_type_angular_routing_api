import { Component, OnInit } from '@angular/core';
import { ProfilesService } from './profiles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //! Si on import le service dans le composant app
  //? On peut aller au dessus dans le app.module ...
  // providers:[ProfilesService]
})
export class AppComponent {


}

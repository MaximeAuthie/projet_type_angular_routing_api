import { ProfilesService } from './../profiles.service';
import { Component} from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-new-profile',
  templateUrl: './new-profile.component.html',
  styleUrls: ['./new-profile.component.css'],
  // ! Systèeme d'héritage de base dans les providers,
  // ! Ici c'est un comp. enfant de App donc on a de base accès au ProfilesService
  // providers:[LogService,ProfilesService]
  providers:[LogService]
})
export class NewProfileComponent {

  constructor(
    private logService:LogService,
    private profilesService:ProfilesService
    ){}

  onCreateProfile(profileName:string,profileStatus:string){
    this.profilesService.addProfile(profileName,profileStatus);
    this.logService.logStatusChange(profileStatus);
  }
}

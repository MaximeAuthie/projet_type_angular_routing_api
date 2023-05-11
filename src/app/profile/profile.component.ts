import { Component,Input } from '@angular/core';
import { LogService } from '../log.service';
import { ProfilesService } from '../profiles.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  // providers:[LogService, ProfilesService]
  providers:[LogService]
})
export class ProfileComponent {
  @Input() id:number;
  @Input() profile:{name:string,status:string};

  constructor(
    private logService:LogService,
    private profilesService:ProfilesService){}


  onSetStatusTo(status:string){
    this.profilesService.updateStatus(this.id,status);
    this.logService.logStatusChange(status);
  }
}

import { Component } from '@angular/core';
import { ApiserviceService  } from '../api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
})

export class ApiComponent {

  newData:any;

  constructor(private _apiService:ApiserviceService) {}

  ngOnInit() {
    this._apiService.getData().subscribe(res => {
      this.newData = res;
      console.log(this.newData);

    });
  }
}

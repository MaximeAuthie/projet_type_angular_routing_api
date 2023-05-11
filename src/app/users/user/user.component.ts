import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  user: {id: number, name: string};

  constructor(private route:ActivatedRoute) { //! ActivateRoute = typage de @angular/router

  }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'], //! Permet de récupérer le paramètre id dans la route. SNAPSHOT = dès qu'il y a un changement, je prends une "photo", dans laquelle je récupère l'id
      name: this.route.snapshot.params['name'] //! Permet de récupérer le paramètre name dans la route
    }
  }
}

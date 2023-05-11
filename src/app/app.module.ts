import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SuperComponent } from './super/super.component';
import { CoolComponent } from './cool/cool.component';
import { LesAmisComponent } from './les-amis/les-amis.component';
import { UnAmiComponent } from './un-ami/un-ami.component';
import { BlogControlComponent } from './blog-control/blog-control.component';
import { ArticleElementComponent } from './article-element/article-element.component';
import { ProfileComponent } from './profile/profile.component';
import { NewProfileComponent } from './new-profile/new-profile.component';
import { ProfilesService } from './profiles.service';
import { HomeComponent } from './home/home.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './albums/album/album.component';
import { EditAlbumComponent } from './albums/edit-album/edit-album.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { AlbumsService } from './albums/albums.service';
import { Routes } from '@angular/router'; //!On importe la librairie router
import { RouterModule } from '@angular/router';
import { ApiComponent } from './api/api.component'; //!On importe la librairie routerModule
import { HttpClientModule } from '@angular/common/http'; //!pour pouvoir utiliser les API

const appRoutes:Routes =[ //!On créé une variable tableau qui contient nos objets route (1 objet = 1 route)
  {path:'', component: HomeComponent},
  {path:'users', component: UsersComponent},
  {path:'albums', component: AlbumsComponent},
  {path:'users/:id/:name', component: UserComponent}, //! ici, on définit une route avec deux paramètres : id et name
  {path:'api', component: ApiComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    SuperComponent,
    CoolComponent,
    LesAmisComponent,
    UnAmiComponent,
    BlogControlComponent,
    ArticleElementComponent,
    ProfileComponent,
    NewProfileComponent,
    HomeComponent,
    AlbumsComponent,
    AlbumComponent,
    EditAlbumComponent,
    UsersComponent,
    UserComponent,
    ApiComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes), //!On importe le RouterModule sur lequel on utilise la méthode forRoot en passant notre variable en paramètre de cete méthode
    HttpClientModule, //!pour pouvoir utiliser les API
  ],
  providers: [AlbumsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

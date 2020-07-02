import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  nuevasCanciones: any[] = [];
  constructor(private spotify: SpotifyService) {
    this.spotify.getNewReleases().subscribe((data: any) => {
      console.log(data.albums.items);
      this.nuevasCanciones = data.albums.items;
    });
  }
  // Ejemplo para ver como funciona la conexión a alguna api
  // paises: any[] = [];
  // constructor(private http: HttpClient) {
  //   // console.log('Constructor funcionando al pelo !!');
  //   this.http
  //     .get('https://restcountries.eu/rest/v2/lang/es')
  //     .subscribe((resp: any) => {
  //       this.paises = resp;
  //       console.log(resp);
  //     });
  // }
}

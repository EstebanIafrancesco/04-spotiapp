import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;
  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.spotify.getNewReleases().subscribe(
      (data: any) => {
        console.log(data);
        this.nuevasCanciones = data;
        this.loading = false;
      },
      (errorService) => {
        this.loading = false;
        this.error = true;
        console.log(errorService);
        this.mensajeError = errorService.error.error.message;
        console.log(this.mensajeError);
      }
    );
  }
}

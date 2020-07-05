import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
})
export class ArtistaComponent {
  artist: any = {};
  loadingArtist: boolean;
  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loadingArtist = true;
    this.router.params.subscribe((params) => {
      this.getArtist(params['id']);
    });
  }

  getArtist(id: string) {
    this.loadingArtist = true;
    this.spotify.getArtist(id).subscribe((artist) => {
      console.log(artist);
      this.artist = artist;
      this.loadingArtist = false;
    });
  }
}

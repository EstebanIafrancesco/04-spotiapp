import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('El servicio está listo para ser utilizado!');
  }
  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCCoGJgGL16IEGbi69pJKEMT9tFsyyr1KNlwQuZWino8vje-OHE-eSxyMb7E4HUytXj7GupkYrNuSMqBu4',
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {
      headers,
    });
  }
}

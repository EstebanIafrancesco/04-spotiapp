import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('El servicio está listo para ser utilizado!');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBnRSMnbiPr5Xc1NfvgSDeeFvjTTr2-L0kmTgUQW6cf8L86QjSUZm4kJi-i-WBkwINLFhwQoe4YYdfNYyc',
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20').pipe(
      map((data) => data['albums'].items)
    );
  }

  getArtists(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map((data) => data['artists'].items)
    );
  }
  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
    //  .pipe(map((data) => data['artists'].items)
    // );
  }
}

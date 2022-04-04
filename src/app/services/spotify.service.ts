import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  // Put the token here
  // To generate the token do a POST request in Postman to the url 'https://accounts.spotify.com/api/token'
  // Add to the body x-www-form-urlencoded :
  // key: grant_type value: client_credentials
  // key: client_id  value: 'your client id'
  // key: client_secret  value: 'your client secret'  
  token: string = '';

  constructor( private http: HttpClient ) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization':`Bearer ${this.token}`
    });

    return this.http.get(url, {headers});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe(map( (data: any) => {
        return data.albums.items;
      }))    
  }
  
  getArtists(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist`)    
      .pipe(map( (data: any) => {
        return data.artists.items;
      }))    
  }
  
  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }
  
  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?market=us`)
      .pipe(map( (data: any) => {
        return data.tracks;
      }))      
  }

}


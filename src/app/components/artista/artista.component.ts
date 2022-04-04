import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {

  artist   : any = {};
  topTracks: any = {};

  loading: boolean = true;

  constructor( private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService ) 
  {
    this.activatedRoute.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);      
    });
  }

  ngOnInit(): void {
  }

  getArtist(id: string) {
    this.spotifyService.getArtist(id)
          .subscribe( data => {
            //console.log(data);
            this.artist = data;                                
          });
  }

  getTopTracks(id: string) {
    this.spotifyService.getTopTracks(id)
          .subscribe( data => {
            //console.log(data);
            this.topTracks = data;
            this.loading = false;                        
          })
  }
  
}

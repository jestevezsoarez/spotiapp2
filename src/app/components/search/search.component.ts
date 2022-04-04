import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  artists: any[] = [];
  loading: boolean = false;

  constructor( private spotify: SpotifyService ) { }

  ngOnInit(): void {
  }

  buscar(termino: string) {    
    if (termino != '') {
      this.loading = true;
      this.spotify.getArtists(termino)
        .subscribe( (data: any) => {
          //console.log(data);
          this.artists = data;
          this.loading = false;        
        })
    }
  }

}

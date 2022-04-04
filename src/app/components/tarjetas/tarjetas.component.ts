import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: [
  ]
})
export class TarjetasComponent implements OnInit {

  @Input() items: any[] = [];

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  buscarArtista(item: any) {
    let artistId: string = '';

    if (item.type === 'artist') {
      artistId = item.id;
    } else if (item.type === 'album') {
      artistId = item.artists[0].id;
    }
    this.router.navigate(['/artist', artistId]);
  }
}

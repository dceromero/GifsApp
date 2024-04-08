
import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/search-response.interface';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit{
  
  @Input()
  public gifs!:Gif ;

  ngOnInit(): void {
    if(!this.gifs) throw new Error('La propiedad Gif es requerida')
  }

}

import { Gif } from '../../interfaces/search-response.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent {

  @Input()
  onGifs:Gif[] = []
  
}

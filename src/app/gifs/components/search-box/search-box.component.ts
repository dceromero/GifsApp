import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
  <div class="input-group mb-3">
  <span class="input-group-text">Buscar: </span>
  <div class="form-floating">
    <input type="text" class="form-control"  
    (keyup.enter)="searchTag()" 
    placeholder="gifs..." 
    #txtSearchTag>
    <label for="txtSearchTag">gifs...</label>
  </div>
</div>
  `,
})
export class SearchBoxComponent {

  @ViewChild('txtSearchTag')
  public tapInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) { }

  searchTag(): void {
    const newTag = this.tapInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.tapInput.nativeElement.value = '';
  }
}

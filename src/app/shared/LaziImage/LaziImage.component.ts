
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazi-image',
  templateUrl: './LaziImage.component.html',
})
export class LaziImageComponent implements OnInit{

  @Input()
  public url!: string;
  
  @Input()
  public alt!: string;

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if(!this.url )  throw new Error('La url es requerido');
    if(!this.alt)  throw new Error('La alt es requerido');
  } 

  onLoad():void{
    console.log('Image loaded');
    this.hasLoaded= true;
  }
}

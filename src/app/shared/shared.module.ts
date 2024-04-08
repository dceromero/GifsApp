import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LaziImageComponent } from './LaziImage/LaziImage.component';



@NgModule({
  declarations: [  
    SidebarComponent,
    LaziImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SidebarComponent,
    LaziImageComponent
  ]
})
export class SharedModule { }

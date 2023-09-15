import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { HeaderSecComponent } from './header-sec/header-sec.component';
import { TabsComponent } from './tabs/tabs.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HeaderSecComponent,
    TabsComponent
  ],
  exports:[
    HeaderComponent,
    HeaderSecComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterModule } from './footer/footer.module';
import { NavBarModule } from './nav-bar/nav-bar.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavBarModule,
    FooterModule
  ],
  exports: [
    NavBarModule,
    FooterModule]
})
export class ComponentsModule { }

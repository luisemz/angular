import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoImagePipe } from './no-image.pipe';

@NgModule({
  declarations: [NoImagePipe],
  exports: [NoImagePipe],
  imports: [CommonModule],
})
export class PipesModule {}

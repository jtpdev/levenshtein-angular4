import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevenshteinService } from './levenshtein.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    LevenshteinService
  ]
})
export class LevenshteinModule { }
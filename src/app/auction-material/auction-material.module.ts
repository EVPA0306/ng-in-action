import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatSelectModule, MatToolbarModule
} from "@angular/material";

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule,
    MatInputModule, MatSelectModule, MatCardModule,
    MatFormFieldModule, BrowserAnimationsModule],
  declarations: []
})
export class AuctionMaterialModule { }

import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { OptionsBottomComponent } from './ui/options-bottom/options-bottom.component';

@Component({
  selector: 'app-material',
  standalone: true,
  imports: [
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatBottomSheetModule
  ],
  templateUrl: './material.component.html',
  styles: ``,
})
export class MaterialComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(OptionsBottomComponent);
  }
}

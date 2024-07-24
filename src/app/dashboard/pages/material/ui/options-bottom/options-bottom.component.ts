import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';


@Component({
  selector: 'app-options-bottom',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './options-bottom.component.html',
  styles: ``
})
export class OptionsBottomComponent {
  constructor(private _bottomSheetRef: MatBottomSheetRef<OptionsBottomComponent>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    // event.preventDefault();
  }
}

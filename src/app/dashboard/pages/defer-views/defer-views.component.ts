import { Component } from '@angular/core';
import { TitleComponent } from '../../shared/title/title.component';
import { HeavyLoadersSlowComponent } from '../../shared/heavy-loaders/heavy-loaders-slow.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-defer-views',
  standalone: true,
  imports: [TitleComponent, HeavyLoadersSlowComponent, CommonModule],
  templateUrl: './defer-views.component.html',
  styles: ``
})
export class DeferViewsComponent {

}

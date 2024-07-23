import { Component, signal } from '@angular/core';

type Grade = 'A'|'B'|'F';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export class ControlFlowComponent {
  public showContent = signal(false);

  public grade = signal<Grade>('A');

  public toggleContent() {
    this.showContent.update( value => !value );
  }
}

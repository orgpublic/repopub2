import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [CommonModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlFlow {
  isTrue: boolean = true;
  color: string = 'red';
  btnClass: string = 'btn btn-primary';
  style = { 'background-color': 'yellow' };
  valueFromSignal = signal('This is from signal');
  value: string = 'This is from variable';
  linkedSignalvariable = linkedSignal({
    source: this.valueFromSignal,
    computation: (value) => "linked signal value is :" + this.valueFromSignal(),
    // equal: (a, b) => a === b
  });
}

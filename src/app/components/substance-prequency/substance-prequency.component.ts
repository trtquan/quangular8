import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, RangeValueAccessor } from '@angular/forms';
import { SubstancePrequencyEnum } from '../substance-form/substance-form-services/substance-form.interface';

@Component({
  selector: 'app-substance-prequency',
  templateUrl: './substance-prequency.component.html',
  styleUrls: ['./substance-prequency.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SubstancePrequencyComponent),
      multi: true
    }
  ]
})
export class SubstancePrequencyComponent implements ControlValueAccessor {
  subPre: SubstancePrequencyEnum;
  SubstancePrequencyEnum = SubstancePrequencyEnum;

  changePre(pre: SubstancePrequencyEnum) {
    this.subPre = pre;
    this.propagateChange(pre);
  }

  propagateChange = (value: SubstancePrequencyEnum) => {};

  writeValue(value: SubstancePrequencyEnum): void {
    this.subPre = value
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

   registerOnTouched() {}

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SubstanceFormService } from '../substance-form/substance-form-services/substance-form.service';
import { FormGroup, FormArray } from '@angular/forms';
import { SubstanceItem, SubstancePrequencyEnum, UseRoute } from '../substance-form/substance-form-services/substance-form.interface';

@Component({
  selector: 'substance-secs',
  templateUrl: './substance-sec.component.html',
  styleUrls: ['./substance-sec.component.scss'],
  providers: [SubstanceFormService]
})

export class SubstanceSecComponent implements OnInit {
  @Input() group: FormGroup;

  @Output() deleteSubstance = new EventEmitter<number>();
  @Output() addSubstance = new EventEmitter();
  @Output() substanceSelected = new EventEmitter<number>();

  get substancesArr(): FormArray {
    return this.group.get('substances') as FormArray;
  }

  constructor(private substanceFormService: SubstanceFormService) { }

  ngOnInit() {
  }

  getSubstanceTitle(subs: SubstanceItem): string {
    const selectedUseRoute = this.substanceFormService.getSelectedRoutes(subs.useRoutes as UseRoute[])
    .reduce((acc, el)=> el.selected ? [...acc, el.name] : acc, []).join(' - ');
    const preStr = this.getSubstancePre(subs.prequency);
    return `${preStr} substance  ${selectedUseRoute}`;
  }
  
  private getSubstancePre(pre: SubstancePrequencyEnum) {
    const subPres = {
      [SubstancePrequencyEnum.DAILY] : 'day',
      [SubstancePrequencyEnum.MONTHLY] : 'month',
      [SubstancePrequencyEnum.YEARLY] : 'year',
    }
    return subPres[pre];
  }

}

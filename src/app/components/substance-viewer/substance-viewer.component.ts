import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-substance-viewer',
  templateUrl: './substance-viewer.component.html',
  styleUrls: ['./substance-viewer.component.scss']
})
export class SubstanceViewerComponent implements OnInit {
  @Input() selectedSubstanceGroup: AbstractControl;
  @Output() addSubstance = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  get useRoutesArr(): FormArray {
    if(!this.selectedSubstanceGroup) return;
    return this.selectedSubstanceGroup.get('useRoutes') as FormArray;
  }

}

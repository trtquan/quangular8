import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { SubstanceFormService } from './substance-form-services/substance-form.service';
import { SubstanceLoaderService } from './substance-form-services/substance-loader.service';
import { SubstanceMock } from './substance-form-services/substance-mock';
import { ISubstanceInterface } from './substance-form-services/substance-form.interface';

@Component({
  selector: 'app-substance-form',
  templateUrl: './substance-form.component.html',
  styleUrls: ['./substance-form.component.scss'],
  providers: [SubstanceFormService, SubstanceLoaderService]
})
export class SubstanceFormComponent implements OnInit {
  editMode = false;
  get form(): FormGroup {
    return this.substanceFormService.form;
  }
  constructor(
    private substanceLoaderService: SubstanceLoaderService,
    private substanceFormService: SubstanceFormService) { 
  }

  ngOnInit() {
    // here you can check the page url if a Substance order id was specified
    // and load it from the server
    if (this.editMode) {
      this.substanceLoaderService.loadSubstanceForEdit(SubstanceMock);
    } else {
      this.substanceFormService.addSubstance();
    }
  }

  get selectedSubstanceGroup(): AbstractControl {
    if (!this.substanceFormService.substancesArr.length) return;

    return this.substanceFormService.substancesArr.at(this.form.get('selectedSubstance').value);
  }

  async submit(data: ISubstanceInterface) {
    if (!this.substanceFormService.isValid) {
      return;
    }
  }

  onSubstanceAdd() {
    this.substanceFormService.addSubstance();
    // this.substanceFormService.selectSubstanceForEdit(this.substanceFormService.substancesArr.length - 1);
  }

  onSubstanceDelete(index: number) {
    this.substanceFormService.deleteSubstance(index);
  }

  onSubstanceSelected(index: number) {
    this.substanceFormService.selectSubstanceForEdit(index);
  }
}

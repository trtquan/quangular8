import { Injectable } from "@angular/core";
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { SubstancePrequencyEnum } from './substance-sec.interface';

@Injectable()
export class SubtanceSecFormService {
  public form: FormGroup;
  public get substancesArr(): FormArray {
    return this.form.get('substances') as FormArray;
  }

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      subtances: this.fb.array([]),
      patientDetail: this.patientDetailFormGroup
    })
  }

  addSubstance() {
    this.substancesArr.push(this.getSubtanceFormGroup());
  }

  getSubtanceFormGroup(prequency: SubstancePrequencyEnum = SubstancePrequencyEnum.DAILY): FormGroup {
    const group = this.fb.group({
      prequency: [prequency],
      substanceType:[],
      useRoutes: [],
      name: [''],
      crunchType: ['normal']
    });
    return group;
  }
  private get patientDetailFormGroup(): FormGroup {
    const patientGroup = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: this.fb.group({
        street: [''],
        houseNum: [''],
        city: [''],
        floor: ['']
      })
    })
    return patientGroup;
  }
}
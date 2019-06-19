import { Injectable } from "@angular/core";
import { FormGroup, FormArray, FormBuilder, Validators, FormControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { SubstancePrequencyEnum, UseRoutesEnum, UseRoute } from './substance-form.interface';

@Injectable()
export class SubstanceFormService {
  public availableUseRoutes = [...Object.values(UseRoutesEnum)];
  public form: FormGroup;

  public get substancesArr(): FormArray {
    return this.form.get('substances') as FormArray;
  }

  public get isValid(): boolean {
    if (!this.form.valid) {
      this.validateAllFormFields(this.form);
      return false;
    }

    return true;
  }

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      selectedSubstance: null,
      substances: this.fb.array([]),
      patientDetail: this.patientDetailFormGroup
    }, {
      validator: this.formValidator
    })
  }

  formValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const errors: ValidationErrors = {};

    if (!(control.get('substances') as FormArray).length) {
      errors.noSubstance = true;
    }

    return Object.keys(errors).length ? errors : null;
  }

  addSubstance() {
    const substanceGroup = this.getSubstanceFormGroup();
    this.substancesArr.push(substanceGroup);
    this.form.markAsDirty();
    return substanceGroup;
  }

  deleteSubstance(index: number) {
    this.substancesArr.removeAt(index);
    this.form.markAsDirty();
  }

  selectSubstanceForEdit(index: number) {
    this.form.get('selectedSubstance').setValue(index);
  }

  getSubstanceFormGroup(prequency: SubstancePrequencyEnum = SubstancePrequencyEnum.DAILY): FormGroup {
    return this.fb.group({
      prequency: [prequency],
      useRoutes: this.mapToCheckboxArrayGroup(this.availableUseRoutes)
    }, {
      validator: []
    });
  }
  
  private get patientDetailFormGroup(): FormGroup {
    const patientGroup = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: this.fb.group({
        street: ['', Validators.required],
        houseNum: ['', Validators.required],
        city: ['', Validators.required],
        floor: ['', Validators.required],
      })
    })
    return patientGroup;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);

      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
  
  getSelectedRoutes(useRoutes: UseRoute[]): UseRoute[] {
    return useRoutes.filter(i => i.selected);
  }

    /**
   * Create a mapping of a string based dataset
   * to a form array suitable for a multi checkbox array selection.
   * this provides a more concise solution
   * as oppose to working with [true, false, false, true]
   */
  private mapToCheckboxArrayGroup(data: string[]): FormArray {
    return this.fb.array(data.map((i) => {
      return this.fb.group({
        name: i,
        selected: false
      });
    }));
  }
}
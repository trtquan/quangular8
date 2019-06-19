import { Injectable } from '@angular/core';
import { SubstanceFormService } from './substance-form.service';
import { ISubstanceInterface, UseRoutesEnum, UseRoute } from './substance-form.interface';

@Injectable()
export class SubstanceLoaderService {

  constructor(
    private SubstanceFormService: SubstanceFormService
  ) {

  }

  loadSubstanceForEdit(data: ISubstanceInterface): void {
    this.SubstanceFormService.form.patchValue({
      patientDetail: {
        ...data.patientDetail
      }
    });

    for (const substance of data.substanceSec) {
      const group = this.SubstanceFormService.addSubstance();
      group.patchValue({
        prequency: substance.prequency,
        useRoutes: this.prefillToppingsSelection(group.get('useRoutes').value, substance.useRoutes as UseRoutesEnum[])
      });
    }
  }

  prefillToppingsSelection(toppings: UseRoute[], selectedToppings: UseRoutesEnum[]): UseRoute[] {
    return toppings.map((i) => {
      if (selectedToppings.includes(i.name)) {
        i.selected = true;
      }

      return i;
    });
  }
}

import { Injectable, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable()
export class UncertaintyFormService {
  private readonly fb = inject(FormBuilder);
  private readonly form = this.createForm();

  private createForm(): FormGroup {
    return this.fb.group({
      uncertainty_type: [null],
      coverage_rate: [null],
    });
  }

  get getUncertaintyForm(): FormGroup {
    return this.form;
  }
}

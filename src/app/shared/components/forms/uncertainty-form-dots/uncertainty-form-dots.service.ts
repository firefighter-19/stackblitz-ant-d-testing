import { Injectable, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UncertaintyFormDotsService {
  private readonly fb = inject(FormBuilder);
  private readonly form = this.createForm();

  private createForm(): FormGroup {
    return this.fb.group({
      uncertainty_type: [null],
      coverage_rate: [2],
      point_count: [5],
      measurement_per_point: [null],
    });
  }

  get getUncertaintyForm(): FormGroup {
    return this.form;
  }
}

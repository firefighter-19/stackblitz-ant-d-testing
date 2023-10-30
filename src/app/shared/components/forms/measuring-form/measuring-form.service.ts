import { Injectable, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class MeasuringFormService {
  private readonly fb = inject(FormBuilder);
  private readonly form = this.createForm();

  private createForm(): FormGroup {
    return this.fb.group({
      measures: this.fb.array([this.createMeasure()]),
      is_calculated: [false],
    });
  }

  get getMeasureForm(): FormGroup {
    return this.form;
  }

  get getMeasures(): FormArray {
    return this.form.controls['measures'] as FormArray;
  }

  addMeasure() {
    this.getMeasures.push(this.createMeasure());
  }

  removeMeasure(index: number) {
    this.getMeasures.removeAt(index);
  }

  private createMeasure(): FormGroup {
    return this.fb.group({
      date: [new Date(), Validators.required],
      measured: [null, Validators.required],
    });
  }
}

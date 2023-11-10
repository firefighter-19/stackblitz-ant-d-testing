import { Injectable, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class BrightnessDotsFormService {
  private readonly fb = inject(FormBuilder);
  private readonly form = this.createForm();

  get getMeasureForm(): FormGroup {
    return this.form;
  }

  get getMeasuresGroup(): FormArray<FormGroup> {
    return this.form.controls['measurements'] as FormArray<FormGroup>;
  }

  get getMeasuresCol(): FormArray {
    return (this.getMeasuresGroup.controls[0] as FormGroup).controls[
      'measured'
    ] as FormArray;
  }

  updateAverageValue(index: number, value: number): void {
    this.getMeasuresGroup.controls[index].controls['average'].patchValue(value);
    this.getMeasuresGroup.controls[index].controls[
      'average'
    ].updateValueAndValidity({ onlySelf: true });
  }

  addMeasureGroup(): void {
    if (this.getMeasuresGroup.length < 10) {
      this.getMeasuresGroup.push(
        this.createMeasureGroup(this.getMeasuresCol.length)
      );
    }
  }

  removeMeasureGroup(index: number): void {
    if (this.getMeasuresGroup.length > 1) {
      this.getMeasuresGroup.removeAt(index);
    }
  }

  addMeasure(): void {
    const LIMIT_OF_COLUMNS = 10;
    if (this.getMeasuresCol.length < LIMIT_OF_COLUMNS) {
      this.getMeasuresGroup.controls.forEach((group) => {
        const measuredArray = (group as FormGroup).controls[
          'measured'
        ] as FormArray;
        measuredArray.push(this.createMeasure(measuredArray.length));
      });
    }
  }

  removeMeasure(index: number): void {
    this.getMeasuresGroup.controls.forEach((group) => {
      const measuredArray = (group as FormGroup).controls[
        'measured'
      ] as FormArray;
      measuredArray.removeAt(index);
    });
  }

  private createForm(): FormGroup {
    return this.fb.group({
      measurements: this.fb.array([this.createMeasureGroup()]),
    });
  }

  private createMeasureGroup(col?: number): FormGroup {
    const DEFAULT_MEASURE_COL_COUNT = col ? col : 3;
    const measureGroup = this.fb.group({
      name: [null, Validators.required],
      average: [{ value: null, disabled: true }, Validators.required],
      measured: this.fb.array<FormGroup>([]),
      is_printed: [false],
    });
    for (let i = 0; i < DEFAULT_MEASURE_COL_COUNT; i++) {
      (measureGroup.controls['measured'] as FormArray).push(
        this.createMeasure(i) as FormGroup
      );
    }
    return measureGroup;
  }

  private createMeasure(index: number): FormGroup {
    return this.fb.group({
      [index]: [null, Validators.required],
    });
  }
}

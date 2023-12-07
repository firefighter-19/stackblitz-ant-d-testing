import { Injectable, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class KeoDotsFormService {
  private readonly fb = inject(FormBuilder);
  private readonly form = this.createForm();

  get getKeoForm(): FormGroup {
    return this.form;
  }

  get getKeoGroup(): FormArray {
    return this.form.controls['keo_groups'] as FormArray;
  }

  manageKeoResultDisabled(status: boolean): void {
    this.getKeoGroup.controls.forEach((group) => {
      (
        (group as FormGroup).controls['measurements'] as FormArray
      ).controls.forEach((measureGroup) => {
        if (status) {
          (measureGroup as FormGroup).controls['keo_result'].disable({
            onlySelf: true,
          });
        } else {
          (measureGroup as FormGroup).controls['keo_result'].enable({
            onlySelf: true,
          });
        }
      });
    });
  }

  get getKeoCol(): FormArray {
    return (this.getKeoGroup.controls[0] as FormGroup).controls[
      'measurements'
    ] as FormArray;
  }

  updateKeoPercent(index: number, value: number): void {
    (this.getKeoGroup.controls[index] as FormGroup).controls[
      'keo_percent'
    ].patchValue(value);
    (this.getKeoGroup.controls[index] as FormGroup).controls[
      'keo_percent'
    ].updateValueAndValidity({ onlySelf: true });
  }

  addKeoGroup(): void {
    if (this.getKeoGroup.length < 10) {
      this.getKeoGroup.push(this.createKeoGroup(this.getKeoCol.length - 1));
      this.getKeoGroup.updateValueAndValidity({ onlySelf: true });
    }
  }

  updateKeoGroup(measureGroupValue: any[]): void {
    measureGroupValue.forEach((group, index) => {
      this.addKeoGroup();
      this.getKeoGroup.controls[index].patchValue(group);
      this.getKeoGroup.controls[index].updateValueAndValidity({
        onlySelf: true,
      });
    });
  }

  copyKeoGroup(index: number): void {
    this.addKeoGroup();
    const lastIndexGroup = this.getKeoGroup.length - 1;
    const copiedRowData = this.getKeoGroup.controls[index].value;
    (this.getKeoGroup.controls[lastIndexGroup] as FormGroup).patchValue(
      copiedRowData
    );
    (
      this.getKeoGroup.controls[lastIndexGroup] as FormGroup
    ).updateValueAndValidity({
      onlySelf: true,
    });
  }

  removeKeoGroup(index: number): void {
    if (this.getKeoGroup.length > 1) {
      this.getKeoGroup.removeAt(index);
      this.getKeoGroup.updateValueAndValidity();
    }
  }

  addKeoMeasure(): void {
    const LIMIT_OF_COLUMNS = 10;
    if (this.getKeoCol.length < LIMIT_OF_COLUMNS) {
      this.getKeoGroup.controls.forEach((group) => {
        const measuredArray = (group as FormGroup).controls[
          'measurements'
        ] as FormArray;
        measuredArray.push(this.createKeoMeasure());
      });
    }
  }

  removeKeoMeasure(index: number): void {
    this.getKeoGroup.controls.forEach((group) => {
      const measuredArray = (group as FormGroup).controls[
        'measurements'
      ] as FormArray;
      measuredArray.removeAt(index);
    });
  }

  private createForm(groupsNum: number = 1, colNum: number = 4): FormGroup {
    const keo_form = this.fb.group({
      keo_groups: this.fb.array([]),
    });
    for (let group = 0; group < groupsNum; group++) {
      (keo_form.controls.keo_groups as FormArray).push(
        this.createKeoGroup(colNum)
      );
    }
    return keo_form;
  }

  private createKeoGroup(col: number): FormGroup {
    const measureGroup = this.fb.group({
      keo_result: [null, Validators.required],
      measurements: this.fb.array([this.createKeoMeasure() as FormGroup]),
    });
    for (let i = 0; i < col; i++) {
      (measureGroup.controls.measurements as FormArray).push(
        this.createKeoMeasure() as FormGroup
      );
    }
    return measureGroup;
  }

  private createKeoMeasure(): FormGroup {
    return this.fb.group({
      e_inner: [null, Validators.required],
      e_outer: [null, Validators.required],
      keo_percent: [null, Validators.required],
    });
  }
}

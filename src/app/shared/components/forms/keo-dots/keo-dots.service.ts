import { Injectable, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { KeoFormModel, KeoMeasureUpdateResult } from './keo-dots.model';

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

  manageKeoResultDisabled(status: string): void {
    this.getKeoGroup.controls.forEach((group) => {
      (
        (group as FormGroup).controls['measurements'] as FormArray
      ).controls.forEach((measureGroup) => {
        if (status === 'calculated') {
          (measureGroup as FormGroup).controls['keo_percent'].disable({
            onlySelf: true,
          });
        } else {
          (measureGroup as FormGroup).controls['keo_percent'].enable({
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

  addKeoGroup(isKeoBlocked: boolean): void {
    if (this.getKeoGroup.length < 10) {
      this.getKeoGroup.push(
        this.createKeoGroup(this.getKeoCol.length - 1, isKeoBlocked)
      );
      this.getKeoGroup.updateValueAndValidity({
        onlySelf: true,
        emitEvent: false,
      });
    }
  }

  updateKeoResult({
    keo_group_index,
    keo_measure_group_index,
    keo_percent,
    keo_result,
  }: KeoMeasureUpdateResult): void {
    const keoGroup = this.getKeoGroup.controls[keo_group_index] as FormGroup;
    const measureGroup = (keoGroup.controls['measurements'] as FormArray)
      .controls[keo_measure_group_index] as FormGroup;

    this.updateKeoGroupResult(
      keoGroup.controls['keo_result'] as FormControl,
      keo_result
    );

    this.updateKeoGroupResult(
      measureGroup.controls['keo_percent'] as FormControl,
      keo_percent
    );
  }

  updateKeoGroupResult(group: FormGroup | FormControl, keo: number): void {
    group.patchValue(keo, {
      emitEvent: false,
      onlySelf: true,
    });
  }

  copyKeoGroup(index: number, isKeoBlocked: boolean): void {
    this.addKeoGroup(isKeoBlocked);
    const lastIndexGroup = this.getKeoGroup.length - 1;
    const copiedRowData = this.getKeoGroup.controls[index].getRawValue();
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

  addKeoMeasure(isKeoBlocked: boolean): void {
    const LIMIT_OF_COLUMNS = 10;
    if (this.getKeoCol.length < LIMIT_OF_COLUMNS) {
      this.getKeoGroup.controls.forEach((group) => {
        const measuredArray = (group as FormGroup).controls[
          'measurements'
        ] as FormArray;
        measuredArray.push(this.createKeoMeasure(isKeoBlocked));
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

  private createForm(
    groupsNum: number = 1,
    colNum: number = 4,
    isKeoBlocked: boolean = true
  ): FormGroup {
    const keo_form = this.fb.group({
      keo_groups: this.fb.array([]),
    });
    for (let group = 0; group < groupsNum; group++) {
      (keo_form.controls.keo_groups as FormArray).push(
        this.createKeoGroup(colNum, isKeoBlocked)
      );
    }
    return keo_form;
  }

  private createKeoGroup(col: number, isKeoBlocked: boolean): FormGroup {
    const measureGroup = this.fb.group({
      keo_result: [null, Validators.required],
      measurements: this.fb.array([
        this.createKeoMeasure(isKeoBlocked) as FormGroup,
      ]),
    });
    for (let i = 0; i < col; i++) {
      (measureGroup.controls.measurements as FormArray).push(
        this.createKeoMeasure(isKeoBlocked) as FormGroup
      );
    }
    return measureGroup;
  }

  private createKeoMeasure(isKeoBlocked: boolean): FormGroup {
    return this.fb.group({
      e_inner: [null, Validators.required],
      e_outer: [null, Validators.required],
      keo_percent: [
        { value: null, disabled: isKeoBlocked },
        Validators.required,
      ],
    });
  }
}

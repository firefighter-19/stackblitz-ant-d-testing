import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicFormCreationService } from 'src/app/shared/utils/services/dynamic-form-creation';
import { AirBlocks, AirFormModel, AverageUpdate } from './air.model';

const LIMIT_OF_CREATION = 10;
const MINIMUM_GROUPS = 3;

@Injectable()
export class AirFormService {
  private form: FormGroup | null = null;
  constructor(
    private readonly fb: FormBuilder,
    private readonly dynamicFormCreationService: DynamicFormCreationService
  ) {}

  get getAirForm() {
    return this.form;
  }

  get getAirMeasurements(): FormArray {
    return this.getAirForm?.controls['measurements'] as FormArray;
  }

  initForm(object: AirFormModel): void {
    this.form = this.dynamicFormCreationService.createDynamicForm(
      object
    ) as FormGroup;
  }

  addDotGroup(): void {
    const newDot = this.fb.control(null, [Validators.required]);
    (this.getAirForm?.controls['measurements'] as FormArray).controls.forEach(
      (group) => {
        Object.keys(group.value).forEach((key) => {
          const groupValue = (group as FormGroup).controls[key] as FormGroup;
          const measureGroups = groupValue.controls['measures'] as FormGroup;

          Object.keys(measureGroups.value).forEach((measureKey) => {
            const dotsGroup = measureGroups.controls[measureKey] as FormArray;
            if (dotsGroup.value.length < LIMIT_OF_CREATION) {
              dotsGroup.push(newDot);
            }
          });
        });
      }
    );
  }

  removeDotGroup(i: number): void {
    (this.getAirForm?.controls['measurements'] as FormArray).controls.forEach(
      (group, index) => {
        Object.keys(group.value).forEach((key) => {
          const groupValue = (group as FormGroup).controls[key] as FormGroup;
          const measureGroups = groupValue.controls['measures'] as FormGroup;
          Object.keys(measureGroups.value).forEach((measureKey, colIndex) => {
            const dotsGroup = measureGroups.controls[measureKey] as FormArray;
            if (dotsGroup.value.length > MINIMUM_GROUPS) {
              (measureGroups.controls[measureKey] as FormArray).removeAt(i);
              this.updateAverage({
                formIndex: index,
                airBlockKey: key as AirBlocks,
                colIndex,
                colKey: measureKey,
              });
            }
          });
        });
      }
    );
  }

  updateAverage({
    formIndex,
    airBlockKey,
    colIndex,
    colKey,
  }: AverageUpdate): void {
    const measureCol = (
      (this.getAirMeasurements.controls[formIndex] as FormGroup).controls[
        airBlockKey
      ] as FormGroup
    ).controls['measures'].value[colKey];

    const averageForColumn =
      measureCol.reduce((acc: number, cur: number) => acc + cur, 0) /
      measureCol.length;
    const averageCell = (
      (
        (this.getAirMeasurements.controls[formIndex] as FormGroup).controls[
          airBlockKey
        ] as FormGroup
      ).controls['averageMeasure'] as FormArray
    ).controls[colIndex];
    averageCell.patchValue(averageForColumn);
  }
}

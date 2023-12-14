import { Injectable } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DynamicFormCreationService } from 'src/app/shared/utils/services/dynamic-form-creation';
import { AirFormModel } from './air.model';

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
      (group) => {
        Object.keys(group.value).forEach((key) => {
          const groupValue = (group as FormGroup).controls[key] as FormGroup;
          const measureGroups = groupValue.controls['measures'] as FormGroup;
          Object.keys(measureGroups.value).forEach((measureKey) => {
            const dotsGroup = measureGroups.controls[measureKey] as FormArray;
            if (dotsGroup.value.length > MINIMUM_GROUPS) {
              (measureGroups.controls[measureKey] as FormArray).removeAt(i);
            }
          });
        });
      }
    );
  }
}

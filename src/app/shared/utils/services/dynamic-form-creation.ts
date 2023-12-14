import { Injectable } from '@angular/core';
import {
  AsyncValidatorFn,
  FormArray,
  FormBuilder,
  FormGroup,
  ValidatorFn,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class DynamicFormCreationService {
  constructor(private readonly fb: FormBuilder) {}
  createDynamicForm(
    data: unknown,
    validators?: any
  ): FormGroup | FormArray | [unknown, ValidatorFn[], AsyncValidatorFn[]] {
    if (Array.isArray(data)) {
      return this.fb.array(
        data.map((item, index) =>
          this.createDynamicForm(item, (validators || {})[index])
        )
      );
    }
    if (typeof data === 'object' && data !== null) {
      const formGroupContent: Record<
        string,
        FormGroup | FormArray | [unknown, ValidatorFn[], AsyncValidatorFn[]]
      > = {};
      for (const [key, value] of Object.entries(data)) {
        formGroupContent[key] = this.createDynamicForm(
          value,
          (validators || {})[key]
        );
      }
      return this.fb.group(formGroupContent);
    }
    const [syncValidators = [], asyncValidators = []] = validators || [];
    return [data, syncValidators, asyncValidators];
  }
}

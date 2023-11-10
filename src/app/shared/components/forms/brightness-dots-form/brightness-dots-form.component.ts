import { BrightnessDotsFormService } from './brightness-dots-form.service';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-brightness-dots-form',
  standalone: true,
  imports: [
    CommonModule,
    NzGridModule,
    NzFormModule,
    ReactiveFormsModule,
    NzDatePickerModule,
    NzDividerModule,
    NzInputNumberModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzCheckboxModule,
    NzTableModule,
  ],
  templateUrl: './brightness-dots-form.component.html',
  styleUrls: ['./brightness-dots-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightnessDotsFormComponent {
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly brightnessWithDotsFormService = inject(
    BrightnessDotsFormService
  );

  get measureForm(): FormGroup {
    return this.brightnessWithDotsFormService.getMeasureForm;
  }

  getMeasureRow(index: number): FormArray<FormGroup> {
    return this.getMeasures.controls[index].controls[
      'measured'
    ] as FormArray<FormGroup>;
  }

  get getMeasures(): FormArray<FormGroup> {
    return this.brightnessWithDotsFormService.getMeasuresGroup as FormArray;
  }

  get getMeasuresCol(): FormArray {
    return this.brightnessWithDotsFormService.getMeasuresCol;
  }

  onMeasureChange(index: number): void {
    const rowValues = this.getMeasureRow(index).value.reduce(
      (sum, value, index) => {
        if (value[index]) {
          sum.push(value[index]);
        }
        return sum;
      },
      []
    );
    const average = 0;
    this.brightnessWithDotsFormService.updateAverageValue(index, average);
  }

  addMeasureGroup(): void {
    this.brightnessWithDotsFormService.addMeasureGroup();
    this.cdr.detectChanges();
  }

  removeMeasureGroup(index: number): void {
    this.brightnessWithDotsFormService.removeMeasureGroup(index);
  }

  addMeasure(): void {
    this.brightnessWithDotsFormService.addMeasure();
  }

  removeMeasure(index: number): void {
    this.brightnessWithDotsFormService.removeMeasure(index);
  }
}

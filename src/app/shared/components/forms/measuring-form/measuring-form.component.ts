import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { MeasuringFormService } from './measuring-form.service';

@Component({
  selector: 'app-measuring-form',
  standalone: true,
  imports: [
    CommonModule,
    NzGridModule,
    NzFormModule,
    ReactiveFormsModule,
    NzDatePickerModule,
    NzDividerModule,
    NzInputNumberModule,
    NzButtonModule,
    NzIconModule,
    NzCheckboxModule,
  ],
  templateUrl: './measuring-form.component.html',
  styleUrls: ['./measuring-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeasuringFormComponent {
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly measureFormService = inject(MeasuringFormService);

  get measureForm(): FormGroup {
    return this.measureFormService.getMeasureForm;
  }

  get getMeasures(): FormArray<FormGroup> {
    return this.measureFormService.getMeasures as FormArray;
  }

  addMeasure(): void {
    this.measureFormService.addMeasure();
    this.cdr.detectChanges();
  }

  removeMeasure(index: number) {
    this.measureFormService.removeMeasure(index);
  }
}

import { NzDividerModule } from 'ng-zorro-antd/divider';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UncertaintyFormComponent } from '../../components/forms/uncertainty-form/uncertainty-form.component';
import { MeasuringFormComponent } from '../../components/forms/measuring-form/measuring-form.component';
import { MeasuringFormService } from '../../components/forms/measuring-form/measuring-form.service';
import { UncertaintyFormService } from '../../components/forms/uncertainty-form/uncertainty-form.service';
import { NzModalModule, NzModalRef } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { MeasuringModel, MeasuringPoint } from '../../models/measuring.model';
import { FormGroup } from '@angular/forms';
import { debounce, debounceTime, distinctUntilChanged, map } from 'rxjs';

const uncertaintyType = [
  { value: 'calculated', name: 'Расчетная' },
  { value: 'attributed', name: 'Приписанная' },
];

@Component({
  selector: 'app-illumination-result',
  standalone: true,
  imports: [
    CommonModule,
    UncertaintyFormComponent,
    MeasuringFormComponent,
    NzDividerModule,
    NzModalModule,
    NzButtonModule,
  ],
  templateUrl: './illumination-result.component.html',
  providers: [MeasuringFormService, UncertaintyFormService],
  styleUrls: ['./illumination-result.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IlluminationResultComponent implements OnInit {
  ngOnInit(): void {
    console.log(
      'variableName ===========>: ',
      this.measureFormService.getMeasureForm.value
    );
  }
  readonly uncertaintyTypes = uncertaintyType;

  private readonly uncertainFormService = inject(UncertaintyFormService);
  private readonly measureFormService = inject(MeasuringFormService);
  private readonly modalRef = inject(NzModalRef);

  get uncertainForm(): FormGroup {
    return this.uncertainFormService.getUncertaintyForm;
  }

  get measureForm(): FormGroup {
    return this.measureFormService.getMeasureForm;
  }

  handleCancel(): void {
    this.modalRef.destroy();
  }

  handleOk(): void {
    const { is_calculated, measures } = this.measureForm.value;
    const { coverage_rate, uncertainty_type } = this.uncertainForm.value;

    const hotWaterResultForm: MeasuringModel = {
      measuring_points: measures,
      is_calculated,
      result: this.getResult(),
      coverage_rate,
      measuring: this.getAverageMeasured(),
      uncertainty: this.getUncertainty(),
      values_for_uncertainty: measures.map(
        (measure: MeasuringPoint) => measure.measured
      ),
      rounded_measuring: +this.getAverageMeasured().toFixed(1),
      uncertainty_type,
    };
    this.modalRef.destroy(hotWaterResultForm);
  }

  private getResult(): string {
    return '0';
  }

  private getAverageMeasured(): number {
    return 0;
  }

  private getUncertainty(): number {
    return 0;
  }
}

import { BrightnessDotsFormService } from './../../components/forms/brightness-dots-form/brightness-dots-form.service';
import { UncertaintyFormComponent } from './../../components/forms/uncertainty-form/uncertainty-form.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeasuringFormService } from '../../components/forms/measuring-form/measuring-form.service';
import { UncertaintyFormService } from '../../components/forms/uncertainty-form/uncertainty-form.service';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { BrightnessDotsFormComponent } from '../../components/forms/brightness-dots-form/brightness-dots-form.component';
const uncertaintyType = [
  { value: 'calculated', name: 'Расчетная' },
  { value: 'attributed', name: 'Приписанная' },
];
@Component({
  selector: 'app-brightness',
  standalone: true,
  imports: [
    CommonModule,
    UncertaintyFormComponent,
    NzGridModule,
    BrightnessDotsFormComponent,
  ],
  providers: [
    MeasuringFormService,
    UncertaintyFormService,
    BrightnessDotsFormService,
  ],
  templateUrl: './brightness.component.html',
  styleUrls: ['./brightness.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrightnessComponent {
  readonly uncertaintyTypes = uncertaintyType;
}

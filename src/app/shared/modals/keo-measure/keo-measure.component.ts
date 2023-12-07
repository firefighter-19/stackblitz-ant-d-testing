import { UncertaintyFormService } from 'src/app/shared/components/forms/uncertainty-form/uncertainty-form.service';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  inject,
} from '@angular/core';
import { KeoDotsFormService } from 'src/app/shared/components/forms/keo-dots/keo-dots.service';
import { UncertaintyFormComponent } from '../../components/forms/uncertainty-form/uncertainty-form.component';
import { KeoDotsFormComponent } from '../../components/forms/keo-dots/keo-dots.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { KeoGroup, KeoUpdate } from './keo-meausre.model';
import { KeoMeasureService } from './keo-measure.service';

const uncertaintyType = [
  { value: 'calculated', name: 'Расчетная' },
  { value: 'attributed', name: 'Приписанная' },
];
@Component({
  selector: 'app-keo-measure',
  templateUrl: './keo-measure.component.html',
  styleUrls: ['./keo-measure.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    UncertaintyFormComponent,
    KeoDotsFormComponent,
    NzGridModule,
    ReactiveFormsModule,
    NzFormModule,
    FormsModule,
    NzInputModule,
    NzInputNumberModule,
    NzModalModule,
    NzButtonModule,
  ],
  providers: [UncertaintyFormService, KeoDotsFormService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeoMeasureComponent implements OnInit {
  private readonly uncertaintyFormService = inject(UncertaintyFormService);
  private readonly keoDotsFormService = inject(KeoDotsFormService);
  private readonly keoMeasureService = inject(KeoMeasureService);
  // constructor(
  //   private readonly uncertaintyFormService: UncertaintyFormService,
  //   private readonly keoDotsFormService: KeoDotsFormService,
  //   private readonly keoMeasureService: KeoMeasureService
  // ) {}
  @Input({
    required: false,
  })
  params: any;
  ngOnInit(): void {
    if (this.params) {
      console.log(this.params);
    }
  }
  readonly uncertaintyTypes = uncertaintyType;

  getKeoMeasurements(params: KeoUpdate): void {
    const { index, ...rest } =
      this.keoMeasureService.getKeoGroupCalculations(params);
    this.keoDotsFormService.updateKeoPercent(index);
  }

  handleCancel(): void {}

  handleOk(): void {}
}

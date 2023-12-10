import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  inject,
} from '@angular/core';
import { KeoDotsFormService } from 'src/app/shared/components/forms/keo-dots/keo-dots.service';
import { KeoDotsFormComponent } from '../../components/forms/keo-dots/keo-dots.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzModalModule, NzModalRef } from 'ng-zorro-antd/modal';
import { CombinedForms, KEO_PROTOCOLS } from './keo-measure.model';
import { KeoMeasureService } from './keo-measure.service';
import {
  KEO_TYPE,
  KeoUpdateGroup,
} from '../../components/forms/keo-dots/keo-dots.model';
import { UncertaintyFormDotsComponent } from '../../components/forms/uncertainty-form-dots/uncertainty-form-dots.component';
import { UncertaintyFormDotsService } from '../../components/forms/uncertainty-form-dots/uncertainty-form-dots.service';

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
    UncertaintyFormDotsComponent,
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
  providers: [
    UncertaintyFormDotsService,
    KeoDotsFormService,
    KeoMeasureService,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeoMeasureComponent implements OnInit {
  readonly uncertaintyTypes = uncertaintyType;
  private readonly uncertaintyFormService = inject(UncertaintyFormDotsService);
  private readonly keoDotsFormService = inject(KeoDotsFormService);
  private readonly keoMeasureService = inject(KeoMeasureService);
  private readonly modalRef = inject(NzModalRef);

  @Input() illumination_type: KEO_TYPE | null = null;
  @Input() illumination_protocol: KEO_PROTOCOLS | null = KEO_PROTOCOLS.working;

  @Input()
  params: CombinedForms | null = null;

  isKeoBlockLocked: boolean = true;

  ngOnInit(): void {
    if (this.params) {
      this.uncertaintyFormService.getUncertaintyForm.patchValue(
        this.params.uncertaintyDotsForm
      );
      this.keoDotsFormService.getKeoForm.patchValue(this.params.keoDotsForm);
    }
  }

  emitDotsQuantity(quantity: number): void {
    this.keoMeasureService.changePointNumber(quantity, this.isKeoBlockLocked);
  }

  emitUncertaintyType(type: string): void {
    this.isKeoBlockLocked = type === 'calculated';
    this.keoDotsFormService.manageKeoResultDisabled(type);
  }

  emitSquareValue(value: number): void {}

  getKeoMeasurements(keoUpdateGroup: KeoUpdateGroup): void {
    if (this.illumination_protocol) {
      const { keo_percent, keo_result } =
        this.keoMeasureService.getKeoGroupCalculations(
          keoUpdateGroup,
          this.illumination_protocol
        );
      this.keoDotsFormService.updateKeoResult({
        ...keoUpdateGroup,
        keo_percent,
        keo_result,
      });
    }
  }

  handleCancel(): void {
    this.modalRef.close();
  }

  handleOk(): void {
    this.modalRef.close();
  }
}

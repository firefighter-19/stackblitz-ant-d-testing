import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { uncertaintyTypes } from 'src/app/shared/utils/models/uncertainty.utils-model';
import { UncertaintyFormService } from './uncertainty-form.service';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-uncertainty-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputNumberModule,
    NzIconModule,
    NzGridModule,
    NzSelectModule,
  ],
  templateUrl: './uncertainty-form.component.html',
  styleUrls: ['./uncertainty-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UncertaintyFormComponent {
  readonly uncertaintyForm = inject(UncertaintyFormService).getUncertaintyForm;
  readonly uncertaintyTypes = uncertaintyTypes;
}

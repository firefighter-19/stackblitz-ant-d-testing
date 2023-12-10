import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import {
  UncertaintyDotsFormModel,
  UncertaintyTypes,
} from './uncertainty-form-dots.model';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { UncertaintyFormDotsService } from './uncertainty-form-dots.service';

@Component({
  selector: 'app-uncertainty-form-dots',
  templateUrl: './uncertainty-form-dots.component.html',
  styleUrls: ['./uncertainty-form-dots.component.css'],
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UncertaintyFormDotsComponent implements OnInit {
  @Input() params: Partial<UncertaintyDotsFormModel> | null = null;
  @Input()
  uncertaintyTypes: UncertaintyTypes[] | null = null;
  readonly uncertaintyForm = inject(UncertaintyFormDotsService)
    .getUncertaintyForm;

  @Output() emitDots = new EventEmitter<number>();
  @Output() emitUncertaintyType = new EventEmitter<string>();
  @Output() emitSquareValue = new EventEmitter<number>();

  ngOnInit(): void {
    if (this.params) {
      this.uncertaintyForm.patchValue(this.params);
      this.uncertaintyForm.updateValueAndValidity({
        emitEvent: false,
      });
    }
    if (this.uncertaintyTypes) {
      this.uncertaintyForm.controls['uncertainty_type'].patchValue(
        this.uncertaintyTypes[0].value
      );
      this.uncertaintyForm.controls['uncertainty_type'].updateValueAndValidity({
        onlySelf: true,
      });
      this.emitUncertaintyType.emit(this.uncertaintyTypes[0].value);
    }
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { UncertaintyFormService } from './uncertainty-form.service';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { UncertaintyTypes } from './uncertainty-form.model';

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
  providers: [UncertaintyFormService],
  templateUrl: './uncertainty-form.component.html',
  styleUrls: ['./uncertainty-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UncertaintyFormComponent implements OnInit {
  readonly uncertaintyForm = inject(UncertaintyFormService).getUncertaintyForm;
  @Input({
    required: true,
  })
  uncertaintyTypes: UncertaintyTypes[] | null = null;
  @Input() defaultUncertainty: string | null = null;

  ngOnInit(): void {
    if (this.defaultUncertainty) {
      this.uncertaintyForm.patchValue({
        uncertainty_type: this.defaultUncertainty,
      });
      this.uncertaintyForm.controls['uncertainty_type'].updateValueAndValidity({
        onlySelf: true,
      });
    }
  }

  @Output() emitUncertaintyType = new EventEmitter<string>();

  emitChosenUncertaintyType(type: string): void {
    this.emitUncertaintyType.emit(type);
  }
}

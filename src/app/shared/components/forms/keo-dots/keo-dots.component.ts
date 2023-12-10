import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
} from '@angular/core';
import {
  FormArray,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { KeoDotsFormService } from './keo-dots.service';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { StrPipe } from './keo-dots.utils';
import { KEO_TYPE, KeoUpdateGroup } from './keo-dots.model';
import { startWith } from 'rxjs';

const KEO_GROUP_VALUES: string[] = ['e_inner', 'e_outer', 'keo_percent'];
@Component({
  selector: 'app-keo-dots-form',
  templateUrl: './keo-dots.component.html',
  styleUrls: ['./keo-dots.component.scss'],
  standalone: true,
  providers: [StrPipe],
  imports: [
    CommonModule,
    NzGridModule,
    FormsModule,
    NzFormModule,
    ReactiveFormsModule,
    NzDatePickerModule,
    NzDividerModule,
    NzInputNumberModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzCheckboxModule,
    StrPipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeoDotsFormComponent {
  private readonly keoDotsService = inject(KeoDotsFormService);
  private readonly cdr = inject(ChangeDetectorRef);
  readonly ELEMENTS_IN_GROUP = 2;
  readonly keo_type: typeof KEO_TYPE = KEO_TYPE;
  readonly keoGroupValues = KEO_GROUP_VALUES;
  readonly form = this.keoDotsService.getKeoForm.valueChanges.pipe(
    startWith(true)
  );

  @Input() currentKeoType: KEO_TYPE | null = null;
  @Input() isKeoBlocked: boolean = true;
  @Output() emitKeoChanges = new EventEmitter<KeoUpdateGroup>();
  @Output() emitDotsCount = new EventEmitter<number>();

  provideUnique(index: number): number {
    return index;
  }

  get keoForm(): FormGroup {
    return this.keoDotsService.getKeoForm;
  }

  get getKeoGroupsLength(): number {
    return (this.keoDotsService.getKeoGroup as FormArray).value.length;
  }
  get getKeoGroups(): any {
    return this.keoDotsService.getKeoGroup as FormArray;
  }

  get getKeoMeasureCol(): FormArray {
    return this.keoDotsService.getKeoCol as FormArray;
  }

  onCopyRow(index: number): void {
    this.keoDotsService.copyKeoGroup(index, this.isKeoBlocked);
    this.emitDotsCount.emit(this.keoDotsService.getDotsCount);
  }

  addKeoGroup(): void {
    this.keoDotsService.addKeoGroup(this.isKeoBlocked);
    this.emitDotsCount.emit(this.keoDotsService.getDotsCount);
  }

  removeKeoGroup(index: number): void {
    this.keoDotsService.removeKeoGroup(index);
    this.cdr.detectChanges();
    this.emitDotsCount.emit(this.keoDotsService.getDotsCount);
  }

  onChangeKeoMeasure(
    groupIndex: number,
    keoColIndex: number,
    keoMeasureType: string
  ): void {
    const measureGroup = (
      (this.keoDotsService.getKeoGroup.controls[groupIndex] as FormGroup)
        .controls['measurements'] as FormArray
    ).controls[keoColIndex] as FormGroup;
    if (
      keoMeasureType !== 'keo_percent' &&
      typeof measureGroup.value['e_inner'] === 'number' &&
      typeof measureGroup.value['e_outer'] === 'number'
    ) {
      this.emitKeoChanges.emit({
        keo_group_index: groupIndex,
        keo_measure_group_index: keoColIndex,
      });
    }
  }
}

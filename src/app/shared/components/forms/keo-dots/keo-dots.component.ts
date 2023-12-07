import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
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
import { KEO_TYPE } from './keo-dots.model';
import { KeoGroup } from 'src/app/shared/modals/keo-measure/keo-meausre.model';

@Component({
  selector: 'app-keo-dots-form',
  templateUrl: './keo-dots.component.html',
  styleUrls: ['./keo-dots.component.scss'],
  standalone: true,
  providers: [StrPipe, KeoDotsFormService],
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
export class KeoDotsFormComponent implements OnInit {
  readonly ELEMENTS_IN_GROUP = 2;
  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly keoDotsService: KeoDotsFormService
  ) {}
  @Input() set updateKeoGroup(params: )
  @Input() set setUncertaintyType(status: boolean) {
    this.keoDotsService.manageKeoResultDisabled(status);
  }
  @Input() uncertaintyType: string | null = null;
  @Output() provideMeasurements = new EventEmitter<KeoGroup>();

  ngOnInit(): void {
    // this.keoForm.valueChanges.subscribe((x) => console.log(x));
  }

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

  get getKeoMeasureValue() {
    return this.keoDotsService.getKeoCol.getRawValue()[0];
  }

  get getKeoMeasureCol(): FormArray {
    return this.keoDotsService.getKeoCol as FormArray;
  }

  onCopyRow(index: number): void {
    this.keoDotsService.copyKeoGroup(index);
  }

  addKeoGroup(): void {
    this.keoDotsService.addKeoGroup();
    this.cdr.detectChanges();
  }

  emitMeasurements(i: number): void {
    const groupValues: KeoGroup = this.getKeoGroups.value[i];
    this.provideMeasurements.emit(groupValues);
  }

  removeKeoGroup(index: number): void {
    this.keoDotsService.removeKeoGroup(index);
  }

  addMeasure(): void {
    this.keoDotsService.addKeoMeasure();
  }

  removeMeasure(index: number): void {
    this.keoDotsService.removeKeoMeasure(index);
    // this.onMeasureChange(this.getKeoGroups.length - 1);
  }
}

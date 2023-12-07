import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
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
  uncertaintyType = null;
  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly keoDotsService: KeoDotsFormService
  ) {}
  @Input() set setUncertaintyType(status: boolean) {
    this.keoDotsService.manageKeoResultDisabled(status);
  }
  ngOnInit(): void {
    this.keoForm.valueChanges.subscribe((x) => console.log(x));
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
    // this.onMeasureChange(this.getKeoGroups.length - 1);
  }

  // private calculateAverageValues(numbers: Record<string, number>[]): number {
  //   const { amount, filteredElements } = numbers.reduce(
  //     (
  //       sum: { amount: number; filteredElements: number[] },
  //       value: Record<string, number>,
  //       index: number
  //     ) => {
  //       if (typeof value[index] === 'number') {
  //         sum.amount += value[index];
  //         sum.filteredElements.push(value[index]);
  //       }
  //       return sum;
  //     },
  //     { amount: 0, filteredElements: [] }
  //   );
  //   return isNaN(amount / filteredElements.length)
  //     ? 0
  //     : amount / filteredElements.length;
  // }

  // onMeasureChange(index: number): void {
  //   const rowValues: Record<string, number>[] = (
  //     this.getKeosMeasureRow(index) as FormArray
  //   ).value;

  //   const rowAverageValue = this.calculateAverageValues(rowValues);

  //   this.keoDotsService.updateKeoPercent(index, +rowAverageValue.toFixed(2));
  //   const averageValues = this.getKeoGroups
  //     .getRawValue()
  //     .reduce((acc: number[], { average }: any) => {
  //       if (average) {
  //         acc.push(average);
  //       }
  //       return acc;
  //     }, []);
  //   (this.getKeosMeasureRow(index) as FormArray).updateValueAndValidity({
  //     onlySelf: true
  //   });
  //   // this.emitAverageValues.emit(averageValues);
  // }

  addKeoGroup(): void {
    this.keoDotsService.addKeoGroup();
    this.cdr.detectChanges();
  }

  removeKeoGroup(index: number): void {
    this.keoDotsService.removeKeoGroup(index);
    // this.onMeasureChange(this.getKeoGroups.length - 1);
  }

  addMeasure(): void {
    this.keoDotsService.addKeoMeasure();
  }

  removeMeasure(index: number): void {
    this.keoDotsService.removeKeoMeasure(index);
    // this.onMeasureChange(this.getKeoGroups.length - 1);
  }
}

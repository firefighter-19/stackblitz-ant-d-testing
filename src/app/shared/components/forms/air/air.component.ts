import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  Pipe,
  PipeTransform,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirBlocks, AirFormModel, AverageUpdate } from './air.model';
import { AirFormService } from './air.service';
import {
  FormArray,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';

@Pipe({
  name: 'stringPipe',
  standalone: true,
})
export class StrPipe implements PipeTransform {
  transform(value: any): string {
    return value.toString();
  }
}

@Component({
  selector: 'app-air-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    StrPipe,
    NzFormModule,
    NzInputNumberModule,
    NzDividerModule,
    NzButtonModule,
    NzIconModule,
    NzCollapseModule,
  ],
  templateUrl: './air.component.html',
  styleUrls: ['./air.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AirFormService],
})
export class AirComponent implements OnInit {
  constructor(
    private readonly airFormService: AirFormService,
    private readonly cdr: ChangeDetectorRef
  ) {
    this.getFixedValue = this.getFixedValue.bind(this);
  }
  @Input() fullDuty: boolean = false;
  @Input() formModel: AirFormModel | null = null;

  readonly airBlocks: typeof AirBlocks = AirBlocks;
  ngOnInit(): void {
    if (this.formModel) {
      this.airFormService.initForm(this.formModel);
      this.getForm?.valueChanges.subscribe((x) => console.log(x));
    }
  }

  getFixedValue(value: number): string {
    return value.toFixed(2);
  }

  provideUnique(index: number): number {
    return index;
  }

  uniqueObjectKey(index: number, name: any): string {
    return `${name.key}${name.value[index]}`;
  }

  get getForm(): FormGroup | null {
    return this.airFormService.getAirForm;
  }

  get getAirMeasurements(): any {
    return this.airFormService.getAirForm?.controls[
      'measurements'
    ] as FormArray<FormGroup>;
  }

  get getAirMeasurementsBlocks(): { name: string; value: string }[] {
    return Object.keys(this.getAirMeasurements.value[0]).map((value) => ({
      name: this.convertLanguage(value as AirBlocks),
      value: value,
    }));
  }

  private convertLanguage(value: AirBlocks): string {
    const obj = {
      [AirBlocks.beginning]: 'Начало',
      [AirBlocks.middle]: 'Середина',
      [AirBlocks.end]: 'Конец',
    };
    return obj[value];
  }

  get getMeasureRows(): number[] {
    return Object.values(
      this.airFormService.getAirForm?.controls['measurements'].value[0][
        AirBlocks.middle
      ]['measures']
    )[0] as number[];
  }

  get getRows(): string[] {
    return Object.keys(
      this.airFormService.getAirForm?.controls['measurements'].value[0][
        AirBlocks.middle
      ]
    );
  }

  get getRowsTitle(): string[] {
    return Object.keys(
      this.airFormService.getAirForm?.controls['measurements'].value[0][
        AirBlocks.middle
      ]['measures']
    );
  }

  addMeasureGroup(): void {
    this.airFormService.addDotGroup();
  }

  removeMeasureGroup(i: number): void {
    this.airFormService.removeDotGroup(i);
  }

  onDotValueChange(
    formIndex: number,
    airBlockKey: any,
    colIndex: number,
    colKey: any
  ): void {
    this.airFormService.updateAverage({
      formIndex,
      airBlockKey,
      colIndex,
      colKey,
    });
  }
}

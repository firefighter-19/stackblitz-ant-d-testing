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
import { AirBlocks, AirFormModel } from './air.model';
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
  name: 'objectPipe',
  standalone: true,
})
export class ObjectPipe implements PipeTransform {
  transform(value: unknown): Record<string, any> {
    return Object.keys(
      value as Record<string | number | symbol, unknown>
    ).reduce((acc, cur) => {
      acc[cur] = (value as Record<string | number | symbol, unknown>)[cur];
      return acc;
    }, {} as Record<string, unknown>);
  }
}

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
    ObjectPipe,
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
  ) {}
  @Input() fullDuty: boolean = false;
  @Input() formModel: AirFormModel | null = null;

  readonly airBlocks: typeof AirBlocks = AirBlocks;
  ngOnInit(): void {
    if (this.formModel) {
      this.airFormService.initForm(this.formModel);
      this.getForm?.valueChanges.subscribe((x) => console.log(x));
    }
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

  get getAirMeasurementsBlocks(): string[] {
    return Object.keys(this.getAirMeasurements.value[0]);
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
}

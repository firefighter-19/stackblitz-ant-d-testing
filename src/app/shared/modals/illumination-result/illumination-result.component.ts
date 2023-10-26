import { uncertaintyTypes } from "./illumination-result.utils";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from "@angular/forms";
import { NzDatePickerModule } from "ng-zorro-antd/date-picker";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzInputNumberModule } from "ng-zorro-antd/input-number";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { NzCheckboxModule } from "ng-zorro-antd/checkbox";
import { NzSelectModule } from "ng-zorro-antd/select";

@Component({
  selector: "app-illumination-result",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzDatePickerModule,
    NzFormModule,
    NzButtonModule,
    NzInputNumberModule,
    NzIconModule,
    NzDividerModule,
    NzCheckboxModule,
    NzSelectModule,
  ],
  templateUrl: "./illumination-result.component.html",
  styleUrls: ["./illumination-result.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IlluminationResultComponent {
  private readonly fb = inject(FormBuilder);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly form = this.createForm();
  readonly uncertaintyTypes = uncertaintyTypes;

  private createForm(): FormGroup {
    return this.fb.group({
      uncertainty_type: [null],
      coverage_rate: [null],
      measures: this.fb.array([this.createMeasure()]),
      countResult: [false],
    });
  }

  get getForm(): FormGroup {
    return this.form;
  }

  get getMeasures(): FormArray {
    return this.form.controls["measures"] as FormArray;
  }

  addMeasure() {
    this.getMeasures.push(this.createMeasure());
    this.cdr.detectChanges();
  }

  removeMeasure(index: number) {
    this.getMeasures.removeAt(index);
  }

  private createMeasure(): FormGroup {
    return this.fb.group({
      date: [new Date()],
      result: [null],
    });
  }
}

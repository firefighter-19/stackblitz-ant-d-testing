import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeoMeasureComponent } from './keo-measure.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { UncertaintyFormModule } from 'src/app/shared/components/forms/uncertainty-form/uncertainty-form.module';
import { KeoDotsModule } from 'src/app/shared/components/forms/keo-dots/keo-dots.module';

@NgModule({
  declarations: [KeoMeasureComponent],
  imports: [
    CommonModule,
    UncertaintyFormModule,
    KeoDotsModule,
    NzGridModule,
    ReactiveFormsModule,
    NzFormModule,
    FormsModule,
    NzInputModule,
    NzInputNumberModule,
    NzModalModule,
    NzButtonModule
  ],
  exports: [KeoMeasureComponent]
})
export class KeoMeasureModule {}

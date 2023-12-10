import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { Subject, filter, takeUntil } from 'rxjs';

import { KeoMeasureComponent } from 'src/app/shared/modals/keo-measure/keo-measure.component';

@Component({
  selector: 'app-modals',
  standalone: true,
  imports: [CommonModule, NzButtonModule, NzModalModule, NzGridModule],
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalsComponent implements OnDestroy {
  private readonly modalService = inject(NzModalService);
  private readonly containerRef = inject(ViewContainerRef);
  private readonly destroyRef$ = new Subject<boolean>();

  createIlluminationModal(): void {
    // const modal = this.modalService.create({
    //   nzTitle: 'Ввод значений',
    //   nzContent: IlluminationResultComponent,
    //   nzCentered: true,
    //   nzWidth: '600px',
    //   nzViewContainerRef: this.containerRef,
    //   nzClosable: true,
    // });
    // modal.afterClose
    //   .pipe(takeUntil(this.destroyRef$))
    //   .subscribe((res) => console.log(res));
  }

  createKeoModal(): void {
    const modal = this.modalService.create({
      nzTitle: 'Ввод значений',
      nzContent: KeoMeasureComponent,
      // nzData: {
      //   params: {
      //     result: item.measurement_results?.result,
      //     measurements: item.measurement_results?.measurements,
      //     coverage_rate: item.measurement_results?.coverage_rate,
      //     measuring: item.measurement_results?.measuring,
      //     uncertainty: item.measurement_results?.uncertainty,
      //     rounded_measuring: item.measurement_results?.rounded_measuring,
      //     uncertainty_type: item.measurement_results?.uncertainty_type,
      //     values_for_uncertainty:
      //       item.measurement_results?.values_for_uncertainty,
      //   },
      // },
      nzCentered: true,
      nzWidth: '90vw',
      nzViewContainerRef: this.containerRef,
      nzClosable: true,
    });
    modal.afterClose
      .pipe(
        takeUntil(this.destroyRef$),
        filter((value) => value)
        // switchMap((brightnessResult: MeasuringModel) => {
        //   return this.selectionPointsService
        //     .updateIndicator(item.guid, {
        //       ...item,
        //       measurement_results: brightnessResult
        //     })
        //     .pipe(
        //       map(() => brightnessResult),
        //       catchError((err: Error) => {
        //         return of(err).pipe(
        //           tap(({ message }) => {
        //             this.messageService.error(
        //               `Произошла ошибка при попытке обновить данные по освещённости, ${message}`
        //             );
        //           })
        //         );
        //       })
        //     );
        // })
      )
      .subscribe();
  }

  createBrightnessModal(): void {
    // const modal = this.modalService.create({
    //   nzTitle: 'Ввод значений',
    //   nzContent: BrightnessComponent,
    //   nzCentered: true,
    //   nzWidth: '100%',
    //   nzViewContainerRef: this.containerRef,
    //   nzClosable: true,
    // });
    // modal.afterClose
    //   .pipe(takeUntil(this.destroyRef$))
    //   .subscribe((res) => console.log(res));
  }

  ngOnDestroy(): void {
    this.destroyRef$.next(true);
    this.destroyRef$.complete();
  }
}

import { Injectable, ViewContainerRef, inject } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Observable, filter } from 'rxjs';
import { KeoMeasureComponent } from './keo-measure.component';
import { IClientIndicator } from '../../models/protocol.model';

@Injectable()
export class KeoMeasureService {
  private readonly modalService = inject(NzModalService);

  openKeoMeasureModal(
    item: IClientIndicator['measurement_results'],
    containerRef: ViewContainerRef
  ): Observable<unknown | Error> {
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
      nzViewContainerRef: containerRef,
      nzClosable: true,
    });
    return modal.afterClose.pipe(
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
    );
  }
}

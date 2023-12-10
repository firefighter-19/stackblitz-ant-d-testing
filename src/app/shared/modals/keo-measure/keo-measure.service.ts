import { Injectable, inject } from '@angular/core';
import {
  KEO_PROTOCOLS,
  KeoGroupResultCalculation,
  KeoMeasurement,
} from './keo-measure.model';
import { KeoUpdateGroup } from '../../components/forms/keo-dots/keo-dots.model';
import { KeoDotsFormService } from '../../components/forms/keo-dots/keo-dots.service';
import { CalculationKeo } from './keo-measure.utils';
import { FormGroup, FormArray } from '@angular/forms';

@Injectable()
export class KeoMeasureService {
  private readonly keoDotsFormService = inject(KeoDotsFormService);

  getKeoGroupCalculations(
    { keo_group_index, keo_measure_group_index }: KeoUpdateGroup,
    protocol: KEO_PROTOCOLS,
    currentSquareParam: number
  ): KeoGroupResultCalculation {
    const keoGroup = this.keoDotsFormService.getKeoGroup.controls[
      keo_group_index
    ] as FormGroup;
    const measureGroup = (keoGroup.controls['measurements'] as FormArray)
      .controls[keo_measure_group_index] as FormGroup;

    const getGroupAverage = keoGroup
      .getRawValue()
      ['measurements'].reduce((accPercent: number[], cur: KeoMeasurement) => {
        if (cur.keo_percent) {
          accPercent.push(cur.keo_percent);
        }
        return accPercent;
      }, []);

    const calc = {
      [KEO_PROTOCOLS.working]: CalculationKeo.calculateForWorking(
        measureGroup.getRawValue()
      ),
      [KEO_PROTOCOLS.common]: {} as KeoMeasurement,
    };
    const keoForMeasureGroup = currentSquareParam * calc[protocol].keo_percent;
    return {
      keo_percent: keoForMeasureGroup,
      keo_result: this.calculateAverageKeo([
        ...getGroupAverage,
        keoForMeasureGroup,
      ]),
    };
  }

  calculateAverageKeo(keos: number[]): number {
    return keos.reduce((acc, cur) => acc + cur, 0) / keos.length;
  }

  changePointNumber(newPointsQuantity: number, isKeoBlocked: boolean): void {
    const currentQuantity = this.keoDotsFormService.getKeoCol.length;
    const isNeedToAdd = newPointsQuantity > currentQuantity;

    const defineNewPoints = isNeedToAdd
      ? newPointsQuantity - currentQuantity
      : currentQuantity - newPointsQuantity;

    for (let i = 0; i < defineNewPoints; i++) {
      if (isNeedToAdd) {
        this.keoDotsFormService.addKeoMeasure(isKeoBlocked);
      } else {
        this.keoDotsFormService.removeKeoMeasure(currentQuantity - i - 1);
      }
    }
  }
}

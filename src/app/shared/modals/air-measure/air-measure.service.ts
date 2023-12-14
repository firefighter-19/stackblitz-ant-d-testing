import { Injectable } from '@angular/core';
import {
  AirBlocks,
  AirFormModel,
  AirMeasurement,
  DotAirMeasure,
} from '../../components/forms/air/air.model';

@Injectable()
export class AirMeasureService {
  constructor() {}

  createAirModel(
    dailyDuties: typeof AirBlocks,
    measures: string
  ): AirFormModel {
    const splitMeasures = measures.split(';').map((value) => value.trim());

    const block = Object.keys(dailyDuties).reduce(
      (acc: Record<string, DotAirMeasure>, cur: string) => {
        acc[cur] = {
          measures: splitMeasures.reduce(
            (measureAcc: Record<string, Array<number | null>>, curMeasure) => {
              measureAcc[curMeasure] = [1, 2, 3, 4, 5];
              return measureAcc;
            },
            {}
          ),
          averageMeasure: new Array(splitMeasures.length).fill(0),
        };
        return acc;
      },
      {}
    );
    return {
      measurements: [block as AirMeasurement],
    };
  }
}

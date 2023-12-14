export type AirMeasurement = Record<AirBlocks, DotAirMeasure>;

export interface AirFormModel {
  measurements: AirMeasurement[];
}

export enum AirBlocks {
  beginning = 'beginning',
  middle = 'middle',
  end = 'end',
}

export interface DotAirMeasure {
  measures: Record<string, Array<number | null>>;
  averageMeasure: number[];
}

const mockAir: AirFormModel = {
  measurements: [
    {
      [AirBlocks.beginning]: {
        measures: {
          '0,4': [1, 2, 3, 4, 5],
          '1.0': [1, 2, 3, 4, 5],
          '1.7': [1, 2, 3, 4, 5],
        },
        averageMeasure: [1, 2, 3, 4, 5],
      },
      [AirBlocks.middle]: {
        measures: {
          '0,4': [1, 2, 3, 4, 5],
          '1.0': [1, 2, 3, 4, 5],
          '1.7': [1, 2, 3, 4, 5],
        },
        averageMeasure: [1, 2, 3, 4, 5],
      },
      [AirBlocks.end]: {
        measures: {
          '0,4': [1, 2, 3, 4, 5],
          '1.0': [1, 2, 3, 4, 5],
          '1.7': [1, 2, 3, 4, 5],
        },
        averageMeasure: [1, 2, 3, 4, 5],
      },
    },
  ],
};

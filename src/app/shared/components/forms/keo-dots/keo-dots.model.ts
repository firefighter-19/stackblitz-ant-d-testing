export enum KEO_TYPE {
  horizontal = 'horizontal',
  ceiling = 'ceiling',
  combined = 'combined',
}

export interface KeoFormModel {
  keo_groups: KeoGroup[];
}

export interface KeoGroup {
  measurements: KeoMeasurement[];
  keo_result: number;
}

export interface KeoMeasurement {
  e_inner: number;
  e_outer: number;
  keo_percent: number;
}

export type KeoUpdateGroup = {
  keo_group_index: number;
  keo_measure_group_index: number;
};

export type KeoMeasureUpdateResult = Pick<KeoMeasurement, 'keo_percent'> &
  KeoUpdateGroup &
  Pick<KeoGroup, 'keo_result'>;

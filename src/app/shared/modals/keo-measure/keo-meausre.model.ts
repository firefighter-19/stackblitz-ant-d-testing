export interface KeoModel {
  uncertainty_type: string;
  result: string;
  coverage_rate: number;
  uncertainty: number;
  point_count: number;
  measurement_per_point: number;
  keo_average_result: number;
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

export type KeoUpdate = KeoGroup & { index: number };

export interface UncertaintyTypes {
  value: string;
  name: string;
}
export interface UncertaintyDotsFormModel {
  uncertainty_type: string;
  coverage_rate: number;
  point_count: number;
  measurement_per_point: number;
}

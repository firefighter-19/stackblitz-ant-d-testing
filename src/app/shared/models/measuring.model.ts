export interface MeasuringModel {
  measuring_points: MeasuringPoint[];
  is_calculated?: boolean;
  result?: string;
  coverage_rate: number;
  measuring: number;
  rounded_measuring: number;
  uncertainty: number;
  uncertainty_type: string;
  values_for_uncertainty: number[];
}

export interface MeasuringPoint {
  date: Date;
  measured: number;
}

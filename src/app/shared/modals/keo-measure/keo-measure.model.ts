import { KeoFormModel } from '../../components/forms/keo-dots/keo-dots.model';
import { UncertaintyDotsFormModel } from '../../components/forms/uncertainty-form-dots/uncertainty-form-dots.model';

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

export enum KEO_PROTOCOLS {
  working = '000000151',
  common = '000000152',
}

export type KeoGroupResultCalculation = Pick<KeoMeasurement, 'keo_percent'> &
  Pick<KeoGroup, 'keo_result'>;

export type CombinedForms = {
  keoDotsForm: KeoFormModel;
  uncertaintyDotsForm: UncertaintyDotsFormModel;
};

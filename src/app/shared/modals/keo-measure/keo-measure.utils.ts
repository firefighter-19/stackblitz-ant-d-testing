import {
  KeoFormModel,
  KeoMeasurement,
} from '../../components/forms/keo-dots/keo-dots.model';

export class CalculationKeo {
  static calculateForWorking(keoMeasurement: KeoMeasurement): KeoMeasurement {
    return {
      ...keoMeasurement,
      keo_percent: (keoMeasurement.e_inner / keoMeasurement.e_outer) * 100,
    };
  }
}

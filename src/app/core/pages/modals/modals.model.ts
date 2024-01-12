export interface SearchWindowParams {
  protocolCode: string;
  indicatorCode: string;
}

export interface ModalComponentVariables {
  componentName: string;
  componentPath: string;
  headerText: string;
  modalWidth?: string;
  cancelBtnText?: string;
  okBtnText?: string;
}

export type ModalSchema = Record<string, IndicatorGroupType>;

type IndicatorGroupType = Record<string, IndicatorGroup | ProtocolGroups | string>;

export type IndicatorGroup = {
  indicatorGroupType: IndicatorGroups;
  componentName: string;
  componentPath: string;
  additionalConditions: AdditionalConditions[] | null;
};

type AdditionalConditions = {
  condition: Record<string, string | number>;
  componentName: string;
  componentPath: string;
};

export enum IndicatorGroups {
  keo_codes,
  brightness,
  hot_water_temp,
  vertical_illumination,
  horizontal_illumination,
  avg_horizontal_illumination,
  vibration_frequency_measuring,
  vibration_equivalent,
  resulting_temperature,
  impulse,
  impulse_sound_level,
  equivalent_sound_level,
  max_sound_level,
  sound_pressure_level,
  peak_sound_level,
  min_sound_level,
}

export enum ProtocolGroups {
  biomaterial,
  natural_biotopes,
  atmospheric_air,
  living_air,
  closed_rooms_air,
  zp_air,
  workplaces_air,
  biotests,
  sterility,
  flush,
  noise,
  new_noise,
  hertz_50,
  workplace_noise,
  equipment_noise,
  microclimate,
  mad,
  vibration,
  illumination,
  hot_water_temp,
  keo,
  air_temperature,
  air_speed,
  air_humidity,
  workplace_microclimate,
  max_vibration
}

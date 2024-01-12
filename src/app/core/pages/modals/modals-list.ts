import { ModalSchema, ProtocolGroups, IndicatorGroups } from './modals.model';

export const modalWindowObject: ModalSchema = {
  '000000094': {
    componentName: 'MicroclimateModalComponent',
    componentPath: 'microclimate-modal',
    protocolGroupName: ProtocolGroups.illumination,
    '000005336': {
      indicatorGroupType: IndicatorGroups.keo_codes,
      componentName: 'IlluminationResultModalComponent',
      componentPath: 'illumination-result',
      additionalConditions: null,
    },
    '000014021': {
      indicatorGroupType: IndicatorGroups.brightness,
      componentName: 'BrightnessMeasureComponent',
      componentPath: 'brightness-measure',
      additionalConditions: null,
    },
    '000005455': {
      indicatorGroupType: IndicatorGroups.vertical_illumination,
      componentName: 'BrightnessComponent',
      componentPath: 'brightness',
      additionalConditions: null,
    },
    '000008299': {
      indicatorGroupType: IndicatorGroups.horizontal_illumination,
      componentName: 'BrightnessComponent',
      componentPath: 'brightness',
      additionalConditions: null,
    },
    '000012546': {
      indicatorGroupType: IndicatorGroups.avg_horizontal_illumination,
      componentName: 'BrightnessComponent',
      componentPath: 'brightness',
      additionalConditions: null,
    },
  },
  '000000074': {
    protocolGroupName: ProtocolGroups.microclimate,
    componentName: 'AirMeasureComponent',
    componentPath: 'air-measure',
  },
  '000000119': {
    protocolGroupName: ProtocolGroups.microclimate,
    componentName: 'AirMeasureComponent',
    componentPath: 'air-measure',
  },
  '000000114': {
    protocolGroupName: ProtocolGroups.hot_water_temp,
    componentName: 'HotWaterMeasureComponent',
    componentPath: 'hot-water-measure',
  },
  '000000075': {
    protocolGroupName: ProtocolGroups.workplace_microclimate,
    componentName: 'AirMeasureComponent',
    componentPath: 'air-measure',
  },
  '000000137': {
    protocolGroupName: ProtocolGroups.hertz_50,
    componentName: 'FiftyHertzResultModalComponent',
    componentPath: 'fifty-hertz-result-modal',
  },
  '000000154': {
    protocolGroupName: ProtocolGroups.hertz_50,
    componentName: 'FiftyHertzResultModalComponent',
    componentPath: 'fifty-hertz-result-modal',
  },
  '000000156': {
    protocolGroupName: ProtocolGroups.hertz_50,
    componentName: 'FiftyHertzResultModalComponent',
    componentPath: 'fifty-hertz-result-modal',
  },
  '000000155': {
    protocolGroupName: ProtocolGroups.hertz_50,
    componentName: 'FiftyHertzResultModalComponent',
    componentPath: 'fifty-hertz-result-modal',
  },
  '000000152': {
    protocolGroupName: ProtocolGroups.keo,
    componentName: 'KeoMeasureComponent',
    componentPath: 'keo-measure',
  },
  '000000151': {
    protocolGroupName: ProtocolGroups.keo,
    componentName: 'KeoMeasureComponent',
    componentPath: 'keo-measure',
  },
  '000000081': {
    protocolGroupName: ProtocolGroups.mad,
    componentName: 'MadModalComponent',
    componentPath: 'mad-modal',
  },
  '000000083': {
    protocolGroupName: ProtocolGroups.mad,
    componentName: 'MadModalComponent',
    componentPath: 'mad-modal',
  },
  '000000148': {
    protocolGroupName: ProtocolGroups.new_noise,
    componentName: 'NewNoiseMeasuringModalComponent',
    componentPath: 'new-noise-measuring-modal',
    '000004922': {
      indicatorGroupType: IndicatorGroups.equivalent_sound_level,
      componentName: 'NewNoiseMeasuringModalComponent',
      componentPath: 'new-noise-measuring-modal',
      additionalConditions: [
        {
          condition: {
            measurementPlace: 'room',
            noiseCharacter: 'Непостоянный',
          },
          componentName: 'EquipmentNoiseMeasuringModalComponent',
          componentPath: 'equipment-noise-measuring-modal',
        },
        {
          condition: {
            measurementPlace: 'territory',
            noiseCharacter: 'Непостоянный',
          },
          componentName: 'EquipmentNoiseMeasuringModalComponent',
          componentPath: 'equipment-noise-measuring-modal',
        },
        {
          condition: {
            measurementPlace: 'room',
            noiseCharacter: 'Непостоянный',
          },
          componentName: 'NewNoiseMeasuringModalComponent',
          componentPath: 'new-noise-measuring-modal',
        },
        {
          condition: {
            measurementPlace: 'territory',
            noiseCharacter: 'Непостоянный',
          },
          componentName: 'NewNoiseMeasuringModalComponent',
          componentPath: 'new-noise-measuring-modal',
        },
      ],
    },
    '000002310': {
      indicatorGroupType: IndicatorGroups.sound_pressure_level,
      componentName: 'EquipmentNoiseMeasuringModalComponent',
      componentPath: 'equipment-noise-measuring-modal',
      additionalConditions: null,
    },
    '000005126': {
      indicatorGroupType: IndicatorGroups.max_sound_level,
      componentName: 'MaxSoundLevelModalComponent',
      componentPath: 'max-sound-level-modal',
      additionalConditions: null,
    },
    '000005839': {
      indicatorGroupType: IndicatorGroups.max_sound_level,
      componentName: 'PeakSoundLevelModalComponent',
      componentPath: 'peak-sound-level-modal',
      additionalConditions: null,
    },
    '000014443': {
      indicatorGroupType: IndicatorGroups.min_sound_level,
      componentName: 'MaxSoundLevelModalComponent',
      componentPath: 'min-sound-level-modal',
      additionalConditions: null,
    },
  },
  '000000026': {
    protocolGroupName: ProtocolGroups.atmospheric_air,
    componentName: 'AtmosphericAirResultModalComponent',
    componentPath: 'atmospheric-air-result-modal',
  },
  '000000027': {
    protocolGroupName: ProtocolGroups.atmospheric_air,
    componentName: 'AtmosphericAirResultModalComponent',
    componentPath: 'atmospheric-air-result-modal',
  },
  '000000028': {
    protocolGroupName: ProtocolGroups.living_air,
    componentName: 'LivingAirResultModalComponent',
    componentPath: 'living-air-result-modal',
  },
  '000000029': {
    protocolGroupName: ProtocolGroups.closed_rooms_air,
    componentName: 'AtmosphericAirResultModalComponent',
    componentPath: 'atmospheric-air-result-modal',
  },
  '000000030': {
    protocolGroupName: ProtocolGroups.closed_rooms_air,
    componentName: 'AtmosphericAirResultModalComponent',
    componentPath: 'atmospheric-air-result-modal',
  },
  '000000031': {
    protocolGroupName: ProtocolGroups.zp_air,
    componentName: 'AtmosphericAirResultModalComponent',
    componentPath: 'atmospheric-air-result-modal',
  },
  '000000032': {
    protocolGroupName: ProtocolGroups.workplaces_air,
    componentName: 'LivingAirResultModalComponent',
    componentPath: 'living-air-result-modal',
  },
  '000000033': {
    protocolGroupName: ProtocolGroups.workplaces_air,
    componentName: 'LivingAirResultModalComponent',
    componentPath: 'living-air-result-modal',
  },
  '000000034': {
    protocolGroupName: ProtocolGroups.workplaces_air,
    componentName: 'LivingAirResultModalComponent',
    componentPath: 'living-air-result-modal',
  },
  '000000132': {
    protocolGroupName: ProtocolGroups.equipment_noise,
    '000004922': {
      indicatorGroupType: IndicatorGroups.equivalent_sound_level,
      componentName: 'NewNoiseMeasuringModalComponent',
      componentPath: 'new-noise-measuring-modal',
      additionalConditions: null,
    },
    '000002310': {
      indicatorGroupType: IndicatorGroups.sound_pressure_level,
      componentName: 'EquipmentNoiseMeasuringModalComponent',
      componentPath: 'equipment-noise-measuring-modal',
      additionalConditions: null,
    },
    '000005126': {
      indicatorGroupType: IndicatorGroups.max_sound_level,
      componentName: 'MaxSoundLevelModalComponent',
      componentPath: 'max-sound-level-modal',
      additionalConditions: null,
    },
    '000005839': {
      indicatorGroupType: IndicatorGroups.max_sound_level,
      componentName: 'PeakSoundLevelModalComponent',
      componentPath: 'peak-sound-level-modal',
      additionalConditions: null,
    },
    '000014443': {
      indicatorGroupType: IndicatorGroups.min_sound_level,
      componentName: 'MaxSoundLevelModalComponent',
      componentPath: 'min-sound-level-modal',
      additionalConditions: null,
    },
  },
  '000000133': {
    protocolGroupName: ProtocolGroups.equipment_noise,
    '000004922': {
      indicatorGroupType: IndicatorGroups.equivalent_sound_level,
      componentName: 'NewNoiseMeasuringModalComponent',
      componentPath: 'new-noise-measuring-modal',
      additionalConditions: null,
    },
    '000002310': {
      indicatorGroupType: IndicatorGroups.sound_pressure_level,
      componentName: 'EquipmentNoiseMeasuringModalComponent',
      componentPath: 'equipment-noise-measuring-modal',
      additionalConditions: null,
    },
    '000005126': {
      indicatorGroupType: IndicatorGroups.max_sound_level,
      componentName: 'MaxSoundLevelModalComponent',
      componentPath: 'max-sound-level-modal',
      additionalConditions: null,
    },
    '000005839': {
      indicatorGroupType: IndicatorGroups.max_sound_level,
      componentName: 'PeakSoundLevelModalComponent',
      componentPath: 'peak-sound-level-modal',
      additionalConditions: null,
    },
    '000014443': {
      indicatorGroupType: IndicatorGroups.min_sound_level,
      componentName: 'MaxSoundLevelModalComponent',
      componentPath: 'min-sound-level-modal',
      additionalConditions: null,
    },
  },
  '000000129': {
    protocolGroupName: ProtocolGroups.workplace_noise,
    '000004922': {
      indicatorGroupType: IndicatorGroups.equivalent_sound_level,
      componentName: 'WorkplaceNoiseMeasuringModalComponent',
      componentPath: 'work-place-measuring-modal',
      additionalConditions: null,
    },
    componentName: 'WorkplaceNoiseMeasuringModalComponent',
    componentPath: 'work-place-measuring-modal',
  },
  '000000013': {
    protocolGroupName: ProtocolGroups.vibration,
    componentName: 'VibrationAccelerationMeasuringModalComponent',
    componentPath: 'vibration-acceleration-measuring-modal',
    '000001600': {
      indicatorGroupType: IndicatorGroups.vibration_equivalent,
      componentName: 'VibrationAccelerationMeasuringModalComponent',
      componentPath: 'vibration-acceleration-measuring-modal',
      additionalConditions: null,
    },
  },
  '000000014': {
    protocolGroupName: ProtocolGroups.vibration,
    componentName: 'VibrationMeasuringModalComponent',
    componentPath: 'vibration-measuring-modal',
    '000001600': {
      indicatorGroupType: IndicatorGroups.vibration_equivalent,
      componentName: 'VibrationAccelerationMeasuringModalComponent',
      componentPath: 'vibration-acceleration-measuring-modal',
      additionalConditions: null,
    },
  },
  '000000017': {
    protocolGroupName: ProtocolGroups.vibration,
    componentName: 'VibrationAccelerationMeasuringModalComponent',
    componentPath: 'vibration-acceleration-measuring-modal',
    '000001600': {
      indicatorGroupType: IndicatorGroups.vibration_equivalent,
      componentName: 'VibrationAccelerationMeasuringModalComponent',
      componentPath: 'vibration-acceleration-measuring-modal',
      additionalConditions: null,
    },
  },
  '000000018': {
    protocolGroupName: ProtocolGroups.vibration,
    componentName: 'VibrationAccelerationMeasuringModalComponent',
    componentPath: 'vibration-acceleration-measuring-modal',
    '000001600': {
      indicatorGroupType: IndicatorGroups.vibration_equivalent,
      componentName: 'VibrationAccelerationMeasuringModalComponent',
      componentPath: 'vibration-acceleration-measuring-modal',
      additionalConditions: null,
    },
  },
  '000000019': {
    protocolGroupName: ProtocolGroups.vibration,
    componentName: 'VibrationAccelerationMeasuringModalComponent',
    componentPath: 'vibration-acceleration-measuring-modal',
    '000001600': {
      indicatorGroupType: IndicatorGroups.vibration_equivalent,
      componentName: 'VibrationAccelerationMeasuringModalComponent',
      componentPath: 'vibration-acceleration-measuring-modal',
      additionalConditions: null,
    },
  },
  '000000021': {
    protocolGroupName: ProtocolGroups.vibration,
    componentName: 'VibrationMeasuringModalComponent',
    componentPath: 'vibration-measuring-modal',
    '000001600': {
      indicatorGroupType: IndicatorGroups.vibration_equivalent,
      componentName: 'VibrationMeasuringModalComponent',
      componentPath: 'vibration-measuring-modal',
      additionalConditions: null,
    },
    '000001248': {
      indicatorGroupType: IndicatorGroups.vibration_frequency_measuring,
      componentName: 'VibrationFrequencyMeasuringModalComponent',
      componentPath: 'vibration-frequency-measuring-modal',
      additionalConditions: null,
    },
  },
  '000000022': {
    protocolGroupName: ProtocolGroups.vibration,
    componentName: 'VibrationMeasuringModalComponent',
    componentPath: 'vibration-measuring-modal',
  },
  '000001248': {
    protocolGroupName: ProtocolGroups.max_vibration,
    componentName: 'VibrationFrequencyMeasuringModalComponent',
    componentPath: 'vibration-frequency-measuring-modal',
  },
};

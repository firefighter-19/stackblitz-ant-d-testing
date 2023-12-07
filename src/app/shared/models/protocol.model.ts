export interface IClientIndicator {
  guid: string;
  indicator_guid: string;
  created_at: string;
  creator_user_guid: string;
  creator_user_name: string;
  date_entered_result: string | Date;
  division_executor_guid: string;
  division_executor_name: string;
  division_recipient_guid: string;
  division_recipient_name: string;
  employee_entered_result_id: string;
  fio_employee_entered_result: string;
  indicator_id: string;
  indicator_code: string;
  indicator_name: string;
  lab_executor_id: string;
  lab_executor_name: string;
  laboratory_number: string;
  measuring_type: string;
  norm_time_period_id: string;
  method_id: string;
  method_name: string;
  methodic_guid: string;
  methodic_name: string;
  norm_guid: string;
  norm_name: string;
  norm_nd_id: string;
  norm_nd_name: string;
  norm_unit_id: string;
  norm_unit_name: string;
  position_employee_entered_result: string;
  price_list_item: null;
  program_point_bio_guid: null;
  program_point_guid: string;
  result: string;
  updated_at: string;
  result_colour: string;
  result_colour_requested: string;
  number_research: string;
  number_of_decimal: string;
  axes: string;
  height_from_floor: string;
  plane: string;
  point: string;
  division_recipient_id: string;
  inaccuracy: string;
  deleted_at: string;
  deletor_user_guid: string;
  deletor_user_name: string;
  editor_user_guid: string;
  editor_user_name: string;
  measuring: string;
  methodic_code: string;
  modifications: string;
  point_r_zone: string;
  measurement_results: any;
  conditional_parameters: any;
  norm_nd_doc_type: any;
  norm_nd_doc_type_guid: any;
  status_result: string;
  study_object_guid: string;
  study_object_name: string;
  study_object: any;
  research_scheme_id: string;
  stage_tp: string;
  methodic_inaccurancy: any[];
  standard_for_indicator: {
    id: number;
    guid: string;
    code: string;
    min: number;
    max: number;
    unaccepted_quantity: number;
    unaccepted_quantity_unit: string | any;
    norm_type: {
      id: number;
      guid: string;
      name: string;
      code: string;
    };
    norm_result: any;
    norm_result_opposite: any;
    description: string;
    norm_order: number;
    norm_degree: boolean;
  };
  unit_id: string;
  daily_average_from_max: string;
  norm_type_code: string;
  norm_type_name: string;
  norm_description: string;
  norm_time_period_name: string;
  norm_time_period_code: string;
  methodic: any;
  equipment_guid: string;
  equipment_name: string;
  result_indicator_study: {
    id: string;
    value: string;
    result_text: string;
    fio_employee_entered_results: string;
    date_entered_result: string;
    result_colour: 'red' | 'yellow' | null;
    status_result: 'unsatisfactory' | 'satisfactory' | null;
    sample_norm_min: number;
    sample_norm_max: number;
    precision: number;
    precision_norm: number;
    indicator_unit_oa: {
      id: number;
      guid: string;
      full_name: string;
      short_name: string;
    };
    norm_value: number;
    inaccuracy: string | number;
    standard_for_indicator_id?: number;
    standard_for_indicator?: any;
    // indicator_unit_oa?: any;
  };
  result_indicator_study_result_text: string;
}

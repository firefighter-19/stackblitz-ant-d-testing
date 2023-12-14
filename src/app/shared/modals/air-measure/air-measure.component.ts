import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirComponent } from '../../components/forms/air/air.component';
import { AirMeasureService } from './air-measure.service';
import { AirBlocks, AirFormModel } from '../../components/forms/air/air.model';

@Component({
  selector: 'app-air-measure',
  standalone: true,
  imports: [CommonModule, AirComponent],
  templateUrl: './air-measure.component.html',
  styleUrls: ['./air-measure.component.css'],
  providers: [AirMeasureService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AirMeasureComponent implements OnInit {
  constructor(private readonly airMeasureService: AirMeasureService) {}
  @Input() height_from_floor: string = '0,1; 0,6; 1,7; 2,8';
  @Input() airModel: AirFormModel | null = null;
  formModel: AirFormModel | null = null;

  ngOnInit(): void {
    if (!this.airModel) {
      this.formModel = this.airMeasureService.createAirModel(
        AirBlocks,
        this.height_from_floor
      );
    }
  }
}

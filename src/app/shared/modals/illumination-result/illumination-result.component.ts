import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-illumination-result",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./illumination-result.component.html",
  styleUrls: ["./illumination-result.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IlluminationResultComponent {}

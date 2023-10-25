import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-main-header",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./main-header.component.html",
  styleUrls: ["./main-header.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainHeaderComponent {}

import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NzGridModule } from "ng-zorro-antd/grid";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-main-header",
  standalone: true,
  imports: [CommonModule, NzGridModule, RouterModule],
  templateUrl: "./main-header.component.html",
  styleUrls: ["./main-header.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainHeaderComponent {}

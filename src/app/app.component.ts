import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, RouterOutlet } from "@angular/router";
import { MainHeaderComponent } from "./core/components/main-header/main-header.component";
import { mainRoutes } from "./app.routes";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, MainHeaderComponent],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = "antd-testing";

  readonly routes = mainRoutes;
}

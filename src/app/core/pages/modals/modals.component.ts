import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ViewContainerRef,
  inject,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { NzModalService, NzModalModule } from "ng-zorro-antd/modal";
import { IlluminationResultComponent } from "src/app/shared/modals/illumination-result/illumination-result.component";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzGridModule } from "ng-zorro-antd/grid";

@Component({
  selector: "app-modals",
  standalone: true,
  imports: [CommonModule, NzButtonModule, NzModalModule, NzGridModule],
  templateUrl: "./modals.component.html",
  styleUrls: ["./modals.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalsComponent {
  private readonly modalService = inject(NzModalService);
  private readonly containerRef = inject(ViewContainerRef);
  private readonly destroyRef = inject(DestroyRef);

  createIlluminationModal(): void {
    const modal = this.modalService.create({
      nzTitle: "illumination",
      nzContent: IlluminationResultComponent,
      nzOkText: "Yes",
      nzCancelText: "No",
      nzCentered: true,
      nzViewContainerRef: this.containerRef,
      nzOnOk: () => {
        console.log("321 ===========>: ", 321);
      },
    });
    modal.afterClose.pipe().subscribe();
  }
}

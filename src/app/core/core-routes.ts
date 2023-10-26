import { Routes } from "@angular/router";
import { NzModalService } from "ng-zorro-antd/modal";

export const CoreRoutes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./pages/modals/modals.component").then((c) => c.ModalsComponent),
    providers: [NzModalService],
  },
];

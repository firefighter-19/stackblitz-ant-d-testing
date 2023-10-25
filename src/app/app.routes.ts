import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "modals",
    loadChildren: () =>
      import("./core/core-routes").then((route) => route.CoreRoutes),
  },
];

export const mainRoutes = routes.map((route) => ({
  title: route.path,
  route: `/${route.path}`,
}));

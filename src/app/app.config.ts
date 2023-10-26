import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { provideAnimations } from "@angular/platform-browser/animations";

import { routes } from "./app.routes";
import { NZ_DATE_LOCALE, NZ_I18N, ru_RU } from "ng-zorro-antd/i18n";
import { ru } from "date-fns/locale";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    { provide: NZ_DATE_LOCALE, useValue: ru },
    { provide: NZ_I18N, useValue: ru_RU },
  ],
};

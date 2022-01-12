import { HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { AppConfig } from "src/app/core/configs/app-config";

export const HttpLoaderFactory = (http: HttpClient, appConfig: AppConfig): TranslateHttpLoader => {       
    let organization: string = appConfig.organization;
    return new TranslateHttpLoader(http, `./assets/i18n/${organization}/`, '.json');
}
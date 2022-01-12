import { HttpClient } from "@angular/common/http";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { AppConfig } from "src/app/core/configs/app-config";

const HttpLoaderFactory = (http: HttpClient, appConfig: AppConfig): TranslateHttpLoader => {       
    let organization: string = appConfig.organization;
    return new TranslateHttpLoader(http, `./assets/i18n/${organization}/`, '.json');
}

export const translateModule = [
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient, AppConfig]
        }
      })];

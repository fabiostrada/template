import { HttpClient } from "@angular/common/http";
import { AppConfig } from "src/app/core/configs/app-config";

export abstract class HttpService {
    
    protected baseUrl: string;

    constructor(protected appConfig: AppConfig,
                protected httpClient: HttpClient) {
        this.baseUrl = this.appConfig.baseUrl;
    }

    protected abstract serviceUrl(): string;

}
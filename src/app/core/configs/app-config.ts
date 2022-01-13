export class AppConfig {
    organization!: string;
    baseUrl!: string;
    endpoints!: {
        users: {
            baseUrl: string
        },
        roles: {
            baseUrl: string
        },
        articles: {
            baseUrl: string
        },
        store: {
            baseUrl: string
        },
        sold_article: {
            baseUrl: string
        }
    };    
}
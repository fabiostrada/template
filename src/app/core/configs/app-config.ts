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
        purchased_articles: {
            baseUrl: string
        }
    };    
}
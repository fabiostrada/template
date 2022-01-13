import { isNullOrEmpty } from "../helpers/array.helper";
import { ArticleApi } from "./api/article.api";

export class Article {

    constructor(public id: number | undefined,
        public name: string,
        public price: number) {}

    public static arrayOf(arrayApi: Array<ArticleApi>): Array<Article> {
        if (isNullOrEmpty(arrayApi)) {
            return [];
        }
        return arrayApi.map(item => Article.of(item));
    }

    public static of(item: ArticleApi): Article {
        return new Article(
            item.id, item.name, item.price
        );
    }
    
}
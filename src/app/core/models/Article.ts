import { isNullOrEmpty } from "../helpers/array.helper";
import { ArticleApi } from "./api/article.api";
import { Base } from "./base";

export class Article extends Base {

    constructor(public override id: number | undefined,
                public name: string,
                public description: string,
                public price: number) {
        super(id);
    }

    public static arrayOf(arrayApi: Array<ArticleApi>): Array<Article> {
        if (isNullOrEmpty(arrayApi)) {
            return [];
        }
        return arrayApi.map(item => Article.of(item));
    }

    public static of(item: ArticleApi): Article {
        return new Article(
            item.id, item.name, item.description, item.price
        );
    }
    
}
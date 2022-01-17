import { isNullOrEmpty } from "../helpers/array.helper";
import { PurchasedArticleApi } from "./api/purchased-article.api";
import { Article } from "./Article";
import { Base } from "./base";
import { Hash } from "./hash";

export class PurchasedArticle extends Base {

    constructor(public override id: number,
                public article: Article | undefined,     
                public amount: number)  {
        super(id);
    }    

    public static build(purchasedArticlesApi: Array<PurchasedArticleApi>, hash: Hash<Article>): Array<PurchasedArticle> {
        if (isNullOrEmpty(purchasedArticlesApi)) {
            return [];
        }
        return purchasedArticlesApi.map(purchasedArticleApi => PurchasedArticle.of(purchasedArticleApi, hash));
    }

    public static of(purchasedArticleApi: PurchasedArticleApi, hash: Hash<Article>): PurchasedArticle {
        return new PurchasedArticle(
            purchasedArticleApi.id,
            hash[purchasedArticleApi.idArticle],
            purchasedArticleApi.amount
        );
    }
}
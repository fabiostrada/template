import { Article } from "./Article";
import { Base } from "./base";

export class PurchasedArticle extends Base {

    constructor(public override id: number,
                public article: Article | undefined,     
                public amount: number)  {
        super(id);
    }

}
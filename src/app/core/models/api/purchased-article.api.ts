import { Base } from "../base";

export class PurchasedArticleApi extends Base {

    constructor(public override id: number,
        public idArticle: number,
        public amount: number,
        public idUser: number) {
        super(id);
    }

}
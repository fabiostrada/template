import { Base } from "../base";

export class StoreItemDb extends Base {

    constructor(public override id: number,
                public idArticle: number,
                public amount: number) {
        super(id);
    }

}
import { Base } from "../base";

export class StoreItemApi extends Base {

    constructor(public override id: number,
                public idArticle: number,
                public amount: number,
                public idUser: number) {
        super(id);
    }

}
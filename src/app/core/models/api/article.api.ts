import { Base } from "../base";

export class ArticleApi extends Base {

    constructor(public override id: number | undefined,
                public name: string,
                public description: string,
                public price: number) {
        super(id);
    }
}
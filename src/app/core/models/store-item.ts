import { isNullOrEmpty } from "../helpers/array.helper";
import { StoreItemApi } from "./api/store-item.api";
import { Article } from "./Article";
import { Base } from "./base";
import { Hash } from "./hash";

export class StoreItem extends Base {

    constructor(public override id: number,
                public article: Article | undefined,
                public amount: number) {
        super(id);
    }

    public static build(storeItemsApi: Array<StoreItemApi>, articoliHash: Hash<Article>): Array<StoreItem> {
        if (isNullOrEmpty(storeItemsApi)) {
            return [];
        }
        return storeItemsApi.map(storeItemApi => StoreItem.of(storeItemApi, articoliHash));
    }

    public static of(storeItemApi: StoreItemApi, articoliHash: Hash<Article>): StoreItem {        
        return new StoreItem(
            storeItemApi.id,
            articoliHash[storeItemApi.idArticle],
            storeItemApi.amount
        );
    }
}
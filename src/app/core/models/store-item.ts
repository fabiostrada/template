import { isNullOrEmpty } from "../helpers/array.helper";
import { StoreItemDb } from "./api/store-item.db";
import { Article } from "./Article";
import { Base } from "./base";
import { Hash } from "./hash";

export class StoreItem extends Base {

    constructor(public override id: number,
                public article: Article | undefined,
                public amount: number) {
        super(id);
    }

    public static build(storeItemsDB: Array<StoreItemDb>, articoliHash: Hash<Article>): Array<StoreItem> {
        if (isNullOrEmpty(storeItemsDB)) {
            return [];
        }
        return storeItemsDB.map(storeItem => StoreItem.of(storeItem, articoliHash));
    }

    public static of(storeItemDb: StoreItemDb, articoliHash: Hash<Article>): StoreItem {        
        return new StoreItem(
            storeItemDb.id,
            articoliHash[storeItemDb.idArticle],
            storeItemDb.amount
        );
    }
}
import { isNullOrEmpty } from "src/app/core/helpers/array.helper";
import { StoreItem } from "src/app/core/models/store-item";

export class StoreItemDataSource {

    constructor(public id: number,
                public idArticle: number | undefined,
                public name: string | undefined,
                public description: string | undefined,
                public price: number | undefined,
                public amount: number) {
    }

    public static build(storeItems: Array<StoreItem>): Array<StoreItemDataSource> {
        if (isNullOrEmpty(storeItems)) {
            return [];
        }
        return storeItems.map(storeItem => StoreItemDataSource.of(storeItem));
    }

    public static of(storeItem: StoreItem): StoreItemDataSource {
        return new StoreItemDataSource(
            storeItem.id, 
            storeItem.article?.id,
            storeItem.article?.name,
            storeItem.article?.description,
            storeItem.article?.price,
            storeItem.amount
        )
    }
}

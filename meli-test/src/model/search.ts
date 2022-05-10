import { ItemCollection } from '../interfaces/item-collection';
import { Item } from './item';

export class Search {
    public static from(collection: ItemCollection) {
        return {
            categories: Search.buildCategories(collection),
            items: Search.buildItems(collection),
        };
    }

    private static buildCategories(collection: ItemCollection) {
        const categories: any = collection.available_filters.find((category) => category.id === 'category');
        let maxResult = 0
        let data: any = {}
        if (categories) {
            categories.values.forEach((item: any) => {
                if (item.results >= maxResult) {
                    data = item;
                    maxResult = item.results
                }
            })
            return [data.name]
        }
        return [collection.query]

    }


    private static buildItems(collection: ItemCollection) {
        return collection.results
            .map((item) => Item.buildItem(item));
    }

}


import { ItemResponse } from '../interfaces/item-response';
import { ItemDescription } from '../interfaces/item-description';
import { Categories } from './../interfaces/categories-response';

export class Item {
    public static from(item: ItemResponse, itemDes: ItemDescription, categories : Categories) {
        return {
            item: {
                ...Item.buildItem(item),
                categories : categories.path_from_root.map(category => category.name),
                description: itemDes.plain_text
            },
        };
    }

    public static buildItem(item: ItemResponse) {
        return {
            author: {
                name: 'Yuri Marcela',
                lastname: 'Quejada Santos'
            },
            seller: {
                name: item.seller ? (item.seller.eshop ? item.seller.eshop.nick_name : null) : null
            },
            id: item.id,
            title: item.title,
            price: {
                currency: item.currency_id,
                amount: item.price,
            },
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
            sold_quantity: item.sold_quantity
        };
    }
}

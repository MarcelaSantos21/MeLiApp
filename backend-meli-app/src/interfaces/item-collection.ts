import { ItemResponse } from './item-response';
interface PathFromRoot {
    name: string;
};

interface Values {
    name : string,
    results : number,
    path_from_root: PathFromRoot[]
};

interface Filters {
    id : string,
    values: Values[],
    path_from_root: PathFromRoot[]
};

export interface ItemCollection {
    results: ItemResponse[],
    filters: Filters[],
    available_filters: Filters[],
    categories : PathFromRoot[],
    query : string
}

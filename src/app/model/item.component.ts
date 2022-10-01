import { Category } from "./category.component";

export class Item implements ItemInterface{
    public id?:number;
    public name: string;
    public category: Category;
    public price: number;

    constructor(itemCfg:ItemInterface) {
        this.id = itemCfg.id;
        this.name = itemCfg.name;
        this.category = itemCfg.category;
        this.price = itemCfg.price;
    }
}

export interface ItemInterface{
    id?: number;
    name: string;
    category: Category;
    price: number;
}


import { CategoryDTO } from "./CategoryDTO.component";

export class ItemDTO{
    public name: string;
    public category: CategoryDTO;
    public price: number;

    constructor(name: string, category:CategoryDTO, price:number) {
        this.name = name;
        this.category = category;
        this.price = price;
    }
}
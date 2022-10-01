export class Category implements CategoryInterface{
    public id?: number;
    public nameCategory: string;

    constructor(categoryCfg: CategoryInterface){
        this.id = categoryCfg.id;
        this.nameCategory = categoryCfg.nameCategory; 
    }
}

interface CategoryInterface{
    id?: number,
    nameCategory: string;
}
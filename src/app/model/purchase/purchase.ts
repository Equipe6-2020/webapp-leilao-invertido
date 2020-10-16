import { NaturalPerson } from '../natural-person/natural-person';
import { SubCategory } from '../subcategory/subcategory';
import { Offer } from '../offer/offer';

export interface Purchase {

    title: string;
    averagePrice: number;
    description: string;
    date?: Date,
    subCategoryId: number;
    quantity: number;
    status: number;
    subCategory?: SubCategory;
    naturalPerson?: NaturalPerson;
    offers: Offer[];

}
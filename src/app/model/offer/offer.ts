import { Business } from '../business/business';

export interface Offer {

    id?: number;
    description: string;
    purchaseId?: number;
    inStock: boolean;
    price: number;
    business?: Business;
    selected: boolean;
    

}
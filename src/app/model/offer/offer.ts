import { Business } from '../business/business';

export interface Offer {

    description: string;
    purchaseId?: number;
    inStock: boolean;
    price: number;
    business?: Business;
    

}
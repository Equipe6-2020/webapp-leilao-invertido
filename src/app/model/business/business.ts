export interface Address {

    street: string;
    zipcode: string;
    neighborhood: string;

}

export interface Business {

    email: string;
    registeredNumber: string;
    tradeName: string;
    phone: string;
    subcategories: number[];
    address: Address;

}
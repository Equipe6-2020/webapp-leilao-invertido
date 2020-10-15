export interface Address {

    street: string;
    zipcode: string;
    neighborhood: string;

}

export interface NaturalPerson {

    email: string;
    socialNumber: string;
    name: string;
    lastName: string;
    address: Address;

}
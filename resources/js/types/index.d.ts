import { Config } from 'ziggy-js';

export type GroupedCartItems = {
    user: User;
    items: CartItem[];
    totalPrice: number;
    totalQuantity: number;
};

export type CartItem = {
    id: number;
    product_id: number;
    title: string;
    slug: string;
    price: number;
    quantity: number;
    image: string;
    option_ids: Record<string, number>;
    options: VariationTypeOption[];
};

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    csrf_token: string;
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
    totalPrice: number;
    totalQuantity: number;
    miniCartItems: CartItem[];
};

export type Image = {
    id: number;
    thumb: string;
    small: string;
    large: string;
};

export type VariationTypeOption = {
    id: number;
    name: string;
    images: Image[];
    type: VariationType;
};

export type VariationType = {
    id: number;
    name: string;
    type: 'Select' | 'Radio' | 'Image';
    options: VariationTypeOption[];
};

export type Product = {
    id: string;
    image: string;
    title: string;
    slug: string;
    price: number;
    quantity: number;
    images: Image[];
    short_description: string;
    description: string;
    user: {
        id: number;
        name: string;
    };
    department: {
        id: number;
        name: string;
    };
    variationTypes: VariationType[];
    variations: Array<{
        id: number;
        variation_type_option_ids: number[];
        quantity: number;
        price: number;
    }>;
}

export type PaginationProps<T> = {
    data: Array<T>;
}

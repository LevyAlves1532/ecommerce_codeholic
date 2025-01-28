import { Config } from 'ziggy-js';

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
};

export type Product = {
    id: string;
    image: string;
    title: string;
    slug: string;
    price: number;
    quantity: number;
    user: {
        id: number;
        name: string;
    };
    department: {
        id: number;
        name: string;
    };
}

export type PaginationProps<T> = {
    data: Array<T>;
}

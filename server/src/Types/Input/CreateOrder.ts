import { ProductDocument } from "@Models/Product";

type Delivery = {
    name: string;
    phone: string;
    address: string;
    status: "pending" | "canceled" | "delivering" | "success",
    method: string
}

type Product = {
    productItem: ProductDocument;
    count: number;
}

type Payment = {
    status: boolean;
    method: string;
}

type CreateOrderInput = {
    userId: string;
    productItems: Product[];
    delivery: Delivery;
    payment: Payment;
    description: string;
}

export default CreateOrderInput;
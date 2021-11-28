type Delivery = {
    name: string;
    phone: string;
    address: string;
    status: "pending" | "canceled" | "delivering" | "success",
    method: string
}

type Product = {
    productId: string;
    count: number;
}

type Payment = {
    status: boolean;
    method: string;
}

type CreateOrderInput = {
    userId: string;
    products: Product[];
    delivery: Delivery;
    payment: Payment;
    description: string;
}

export default CreateOrderInput;
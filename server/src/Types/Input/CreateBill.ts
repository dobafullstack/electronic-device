type Product = {
    productId: string;
    count: number;
}

type CreateBillInput = {
    userId: string;
    products: Product[];
}

export default CreateBillInput;
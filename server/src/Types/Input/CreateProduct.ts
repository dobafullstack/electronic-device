type CreateProductInput = {
    category_id: string;
    product_type_id: string;
    name: string;
    price: number;
    images: Array<string>;
    count: number;
};

export default CreateProductInput;
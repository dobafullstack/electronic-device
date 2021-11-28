type CreateProductInput = {
    category_detail_id: string;
    product_type_id: string;
    name: string;
    price: number;
    images: Array<string>;
    count: number;
};

export default CreateProductInput;
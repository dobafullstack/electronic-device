type ProductModel = {
    _id: string;
    name: string;
    images: Array<string>;
    price: number;
    category_detail_id: string;
    count: number;
    ram?: string;
    memory?: string;
    pin?: string;
    screen?: string;
    updatedAt: string;
    createdAt: string;
};

export default ProductModel;

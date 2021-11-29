type CreateProductInput = {
    category_detail_id: string;
    name: string;
    price: number;
    images: Array<string>;
    count: number;
    camera?: string;
    memory?: string;
    ram?: string;
    special_feature?: string;
    pin?: string;
    os?: string;
    design?: string;
    screen?: string;
    height?: string;
    color?: string;
    type?: string;
    brand?: string;
};

export default CreateProductInput;
import ProductType from "./ProductType";

type Category = {
    _id: string;
    name: string;
    product_type_id: ProductType[]
    childCate: Category[];
    createdAt: string;
    updatedAt: string;
}

export default Category;
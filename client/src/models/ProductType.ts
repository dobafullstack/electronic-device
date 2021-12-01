import Attribute from "./Attribute";

type ProductType = {
    _id: string;
    name: string;
    attributes: Attribute[]
    createdAt: string;
    updatedAt: string;
}

export default ProductType;
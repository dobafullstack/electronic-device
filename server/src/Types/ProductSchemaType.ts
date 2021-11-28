import { ProductDocument } from './../Models/Product';
import mongoose from 'mongoose'

type ProductSchemaType = {
    productId: ProductDocument;
    count: number;
}

export default ProductSchemaType
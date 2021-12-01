type CreateCategoryInput = {
    name?: string;
    childCate?: CreateCategoryInput[];
    product_type_id?: string;
}
 
export default CreateCategoryInput;
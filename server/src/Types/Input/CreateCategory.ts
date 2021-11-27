type CreateCategoryInput = {
    name: string;
    childCate: CreateCategoryInput[]
}
 
export default CreateCategoryInput;
type Types = {
    name: string;
}

type CreateAttributeInput = {
    name: string;
    unit: string;
    types: Types[]
}   

export default CreateAttributeInput;
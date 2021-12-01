type Types = {
    _id: string;
    name: string;
}

type Attribute = {
    _id: string;
    name: string;
    unit: string;
    types: Types[];
    createdAt: string;
    updatedAt: string;
}

export default Attribute;
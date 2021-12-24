import Schema from '@Constants/Schema';
import mongoose from 'mongoose';

export interface SliderDocument extends mongoose.Document {
    _id: mongoose.Schema.Types.ObjectId;
    title: string;
    content: string;
    image: string;
    subTitle: string;
    index: number;
    createdAt: Date;
    updatedAt: Date;
}

const SliderSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        content: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        index: {
            type: Number,
            required: true,
            default: 0
        },
        subTitle: {
            type: String,
            required: true,
        },
        createdAt: Date,
        updatedAt: Date,
    },
    { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);


const Slider = mongoose.model<SliderDocument>(Schema.SLIDER, SliderSchema);

export default Slider;

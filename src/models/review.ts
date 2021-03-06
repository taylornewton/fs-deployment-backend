import { model, Schema, Model, Document } from 'mongoose';

interface IReview extends Document {
    restaurantName: string;
    review: string;
    rating: number;
}

const reviewSchema: Schema = new Schema({
    restaurantName: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    },
    rating: {
        type: Number
    }
})

const Review: Model<IReview> = model('Reviews', reviewSchema);

export { IReview, Review };
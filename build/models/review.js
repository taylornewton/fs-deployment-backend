"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Review = void 0;
var mongoose_1 = require("mongoose");
var reviewSchema = new mongoose_1.Schema({
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
});
var Review = mongoose_1.model('Reviews', reviewSchema);
exports.Review = Review;

import { RequestHandler } from "express";
import { IReview, Review } from '../models/review';

export const getReviews: RequestHandler = async (req, res, next) => {
    let reviewsFound = await Review.find({});
    res.status(200).json(reviewsFound);
}

export const createReview: RequestHandler = async (req, res, next) => {
    let newReview: IReview = new Review(req.body);
    try {
        let created = await newReview.save();
        res.status(200).json(created);
    }
    catch(err) {
        console.log(err);
        res.send('Cannot create review');
    }
}

export const updateReview: RequestHandler = async (req, res, next) => {
    const updatedReview = req.body;
    if (req.body.reviewId != req.params.reviewId) {
        res.status(400).json(`Bad Request: reviewId ${req.body.reviewId}`);
    } 
    else
    {
        await Review.findByIdAndUpdate(req.params.reviewId, req.body, {}, (err) => {
            if (err) {
                console.log(err);
                res.status(400);
            } else {
                res.status(200).json(req.body);
            }
        });
    }
}

export const deleteReview: RequestHandler = async (req, res, next) => {
    await Review.findByIdAndDelete(req.params.reviewId, {}, (err) => {
        if (err) {
            console.log(err);
            res.status(400);
        }
        else {
            res.status(200);
        }
    });
}
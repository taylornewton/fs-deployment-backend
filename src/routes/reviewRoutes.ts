import { Router } from 'express';
import { createReview, deleteReview, getReviews, updateReview } from '../controllers/reviewController';

const router = Router();

// GET /reviews
router.get('/', getReviews);

// POST /reviews
router.post('/', createReview);

// PUT /reviews/:id
router.put('/:reviewId', updateReview);

// route to view one message based on the parameter `messageID` - GET
router.delete('/:reviewId', deleteReview);

export default router;
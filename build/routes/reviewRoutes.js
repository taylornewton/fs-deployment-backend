"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var reviewController_1 = require("../controllers/reviewController");
var router = express_1.Router();
// GET /reviews
router.get('/', reviewController_1.getReviews);
// POST /reviews
router.post('/', reviewController_1.createReview);
// PUT /reviews/:id
router.put('/:reviewId', reviewController_1.updateReview);
// route to view one message based on the parameter `messageID` - GET
router.delete('/:reviewId', reviewController_1.deleteReview);
exports.default = router;

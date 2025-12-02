package com.skillswap.backend.service;

import com.skillswap.backend.entity.Review;
import com.skillswap.backend.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }

    public Review getReviewById(Long id) {
        return reviewRepository.findById(id).orElse(null);
    }

    public Review createReview(Review review) {
        return reviewRepository.save(review);
    }

    public Review updateReview(Long id, Review reviewDetails) {
        Optional<Review> optionalReview = reviewRepository.findById(id);
        if (optionalReview.isPresent()) {
            Review review = optionalReview.get();
            review.setSwapId(reviewDetails.getSwapId());
            review.setReviewerId(reviewDetails.getReviewerId());
            review.setReviewedUserId(reviewDetails.getReviewedUserId());
            review.setRating(reviewDetails.getRating());
            review.setComment(reviewDetails.getComment());
            review.setCreatedAt(reviewDetails.getCreatedAt());
            return reviewRepository.save(review);
        }
        return null;
    }

    public void deleteReview(Long id) {
        reviewRepository.deleteById(id);
    }
}

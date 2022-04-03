import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useReview from '../../hooks/useReview';
import Review from '../Review/Review';

const Reviews = () => {

    const [reviews, setReviews] = useReview([])

    return (
        <>
            <Container>
                <Row >
               
                {reviews.map(review => <Review key={review.id} review={review} />)}
                
                </Row>
            </Container>
        
        </>
    );
};

export default Reviews;
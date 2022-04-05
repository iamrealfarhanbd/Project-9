import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useReview from '../../hooks/useReview';
import Review from '../Review/Review';

const Reviews = () => {

    const [reviews, setReviews] = useReview([])

    return (
        <>
            <Container className='mx-auto my-5'>
                <Row >
                    <h2 className='text-center p-3'> All Reviews</h2>
                    {reviews.map(review => <Review key={review.id} review={review} />)}
                </Row>
            </Container>

        </>
    );
};

export default Reviews;
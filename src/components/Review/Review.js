import React from 'react';
import { Card, Col } from 'react-bootstrap';
import useReview from '../../hooks/useReview';

const Review = (props) => {
    const { Name, Review,Rating, image } = props.review;
    return (
        <>
            <Col lg={4}>
                <Card className='m-2'>
                    <Card.Header> <img src={image} alt="" rounded className='img-fluid '/> {Name}</Card.Header>
                    <Card.Body>
                        <Card.Title>Rating: {Rating}</Card.Title>
                        <Card.Text>
                            {Review}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Review;
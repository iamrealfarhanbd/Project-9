import React from 'react';
import { Card, Col } from 'react-bootstrap';

import PrettyRating from "pretty-rating-react";
import {
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";

const icons = {
  star: {
    complete: faStar,
    half: faStarHalfAlt,
    empty: faStar,
  }
};

const colors = {
 star: ['#d9ad26', '#d9ad26', '#434b4d'],
};

const Review = (props) => {
    const { Name, Review,Rating, image } = props.review;
    return (
        <>
            <Col lg={4} md={6}>
                <Card className='m-2'>
                    <Card.Header> <img src={image} alt=""  className='img-fluid '/> <b>{Name}</b></Card.Header>
                    <Card.Body>
                        <Card.Title> <span className='d-flex'> Rating: <PrettyRating value={Rating} icons={icons.star} colors={colors.star} /> </span> </Card.Title>
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
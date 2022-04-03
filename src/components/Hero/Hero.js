import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useReview from '../../hooks/useReview';
import Review from '../Review/Review';

const Hero = () => {
    const [reviews,setReviews] = useReview([])
    return (
        <div>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6}>
                        <h1>A vision of brilliance</h1>
                        <p variant="primary">Life is brighter and clearer with Zenbook 14X OLED, the slim, light and compact laptop with a gorgeous 16:10 4K OLED HDR NanoEdge touchscreen that gives you the deepest blacks and the most vivid colors. Powered by the latest 11th Gen Intel® Core™ processors and Intel Iris® Xe graphics, Zenbook 14X OLED delivers superb performance with ASUS Intelligent Performance Technology. The precision-engineered 180° ErgoLift hinge makes sharing content easy, and the innovative ASUS NumberPad 2.0 enhances your on-the-go productivity. Let Zenbook 14X OLED light up your work or play, anywhere.</p>
                    </Col>
                    <Col xs={12} md={6}>
                        <img src="./w800.png" alt="" className='img-fluid' />
                    </Col>

                </Row>
                <Container>
                <Row >
               <h3>Showing 3 reviews</h3>
                {reviews.slice(0, 3).map(review => <Review key={review.id} review={review} />)}
                
                </Row>
            </Container>


            </Container>

        </div>
    );
};

export default Hero;
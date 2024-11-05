import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ExampleCarouselImage from '../ExampleCarouselImage';

export default class Gallery extends Component {
    render() {
        return (
            <Row className="justify-content-center">
                {/* Повторюємо картки, можете змінювати дані за необхідності */}
                {[1, 2, 3,].map((item, index) => (
                    <Col key={index} xs={6} md={3} className="mb-4"> {/* Встановлюємо ширину картки */}
                        <Card style={{ width: '100%' }}>
                            <ExampleCarouselImage
                                imageUrl='https://dic.academic.ru/pictures/wiki/files/50/811ee752dd972bb6fc0f7f200be8741d.jpg'
                                altText={`Slide ${item}`}
                            />
                            <Card.Body>
                                <Card.Title>Card Title {item}</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        );
    }
}

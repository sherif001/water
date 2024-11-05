import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // استيراد Link

const Products = () => (
  <Container className="my-5">
    <h1 className="text-center mb-4">المنتجات</h1>
    <Row>
      {Array.from({ length: 21 }).map((_, index) => (
        <Col md={4} className="mb-4" key={index}>
          <Card>
            <Card.Img variant="top" src="path/to/product-placeholder.jpg" />
            <Card.Body>
              <Card.Title>{`منتج ${index + 1}`}</Card.Title>
              <Card.Text>
                {`وصف موجز للمنتج ${index + 1}، يتميز بجودة عالية وفوائد صحية متعددة.`}
              </Card.Text>
              <Link to={`/products/${index + 1}`}>
                <Button variant="primary">عرض التفاصيل</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Products;

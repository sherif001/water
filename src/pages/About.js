import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => (
  <Container className="my-5">
    <h1 className="text-center mb-4">من نحن</h1>
    <Row>
      <Col md={6}>
        <h3>نبذة عن الشركة</h3>
        <p>نحن شركة متميزة في مجال توفير المياه النقية والآمنة لعملائنا. نعمل بجد لتقديم خدمات متميزة وجودة عالية لضمان رضا العملاء.</p>
        <h3>رؤيتنا</h3>
        <p>أن نصبح المزود الرائد للحلول المائية في المنطقة، من خلال الابتكار والاستدامة.</p>
        <h3>رسالتنا</h3>
        <p>تقديم منتجات مائية آمنة وصحية، تلبي أعلى معايير الجودة وتساهم في الحفاظ على البيئة.</p>
      </Col>
      <Col md={6}>
        <img src="path/to/placeholder-about.jpg" alt="نبذة عن الشركة" className="img-fluid rounded" />
      </Col>
    </Row>
  </Container>
);

export default About;

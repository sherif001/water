import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => (
  <Container className="my-5">
    <h1 className="text-center mb-4">اتصل بنا</h1>
    <Row>
      <Col md={6}>
        <h3>معلومات الاتصال</h3>
        <p>العنوان: شارع المثال، المدينة، البلد</p>
        <p>الهاتف: +123456789</p>
        <p>البريد الإلكتروني: info@company.com</p>
      </Col>
      <Col md={6}>
        <h3>أرسل رسالة</h3>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>الاسم</Form.Label>
            <Form.Control type="text" placeholder="أدخل اسمك" />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>البريد الإلكتروني</Form.Label>
            <Form.Control type="email" placeholder="أدخل بريدك الإلكتروني" />
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label>الرسالة</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="اكتب رسالتك هنا" />
          </Form.Group>
          <Button variant="primary" type="submit">إرسال</Button>
        </Form>
      </Col>
    </Row>
  </Container>
);

export default Contact;

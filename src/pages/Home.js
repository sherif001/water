import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './Home.css'; // افترض أنك أضفت CSS مخصص هنا

const Home = () => (
  <>
    <Helmet>
      <title>قطرة - الجودة في كل قطرة</title>
      <meta name="description" content="قطرة للمياه تقدم مياه نقية وصحية تناسب احتياجاتك اليومية، وتضمن الجودة والاستدامة." />
    </Helmet>

    <Container className="my-5">

      {/* Hero Section */}
      <section className="text-center my-5 p-5 hero-section" style={{ backgroundColor: '#f0f9ff', borderRadius: '10px' }}>
        <h1 className="display-4" style={{ fontFamily: 'Cairo, sans-serif', fontSize: '48px', color: '#F2613F' }}>
          قطرة
        </h1>
        <p className="lead text-muted">نلتزم بتقديم مياه نقية وصحية، تناسب احتياجاتك اليومية وتساعدك على عيش حياة أكثر انتعاشًا وصحة.</p>
        <Button variant="primary" size="lg" href="/products" className="mt-3">تعرف على منتجاتنا</Button>
      </section>

      {/* Why Qatra Section */}
      <section className="my-5">
        <h2 className="text-center text-primary">لماذا تختار قطرة للمياه؟</h2>
        <Row className="text-center my-4">
          {[{ title: 'نقاء وجودة عالية', text: 'نحرص على تقديم مياه نقية بفضل تقنيات متقدمة في معالجة المياه.' },
            { title: 'أمان وصحة', text: 'تخضع مياهنا لعمليات فحص دقيقة لضمان خلوها من أي ملوثات، مما يجعلها آمنة للجميع.' },
            { title: 'الاستدامة', text: 'نلتزم بتطبيق ممارسات صديقة للبيئة لضمان مستقبل أفضل للأجيال القادمة.' },
            { title: 'التوزيع السريع', text: 'شبكة توزيع فعالة لتوفير منتجاتنا في أي وقت ومكان تحتاجه.' }
          ].map((item, index) => (
            <Col md={3} key={index}>
              <Card className="p-3 shadow border-0 rounded">
                <div style={{ width: '80px', height: '80px', backgroundColor: '#e0e0e0', margin: '0 auto', borderRadius: '10px' }}>
                  {/* مساحة الأيقونة */}
                </div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Our Products Section */}
      <section className="my-5">
        <h2 className="text-center text-primary">منتجات مياه قطرة</h2>
        <p className="text-center text-muted">تقدم قطرة مجموعة متنوعة من منتجات المياه التي تلبي احتياجات الأفراد والشركات.</p>
        <Row className="text-center my-4">
          <Col md={6} className="mb-4">
            <Card className="p-3 shadow border-0 rounded">
              <Card.Title>قوارير مياه مختلفة الأحجام</Card.Title>
              <Card.Text>صغيرة، متوسطة، وكبيرة لتناسب احتياجاتك اليومية.</Card.Text>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="p-3 shadow border-0 rounded">
              <Card.Title>مياه مخصصة للمكاتب والشركات</Card.Title>
              <Card.Text>حلول مائية متكاملة لتزويد بيئات العمل بالمياه النظيفة.</Card.Text>
            </Card>
          </Col>
        </Row>
        <div className="text-center">
          <Button variant="primary" size="lg" href="/products">استعرض المنتجات</Button>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="my-5">
        <h2 className="text-center text-primary">رسالتنا ورؤيتنا</h2>
        <Row className="text-center my-4">
          <Col md={6}>
            <Card className="p-4 shadow border-0 rounded bg-light">
              <Card.Body>
                <h4>رسالتنا</h4>
                <p>أن نكون الخيار الأول للمياه النقية في المنطقة، ونساهم في تحسين جودة حياة عملائنا من خلال توفير مياه نقية وموثوقة.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="p-4 shadow border-0 rounded bg-light">
              <Card.Body>
                <h4>رؤيتنا</h4>
                <p>الوصول إلى الريادة في مجال توفير المياه من خلال الجودة، الابتكار، والاستدامة.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Testimonials Section */}
      <section className="my-5">
        <h2 className="text-center text-primary">ماذا يقول عنا عملاؤنا</h2>
        <Row className="text-center my-4">
          <Col md={{ span: 6, offset: 3 }}>
            <Card className="p-4 shadow border-0 rounded">
              <Card.Body>
                <Card.Text>"لطالما اعتمدت على قطرة للمياه، وأثق بأنني أقدم أفضل مياه لأسرتي."</Card.Text>
                <Card.Footer>– أحمد، القاهرة</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Contact Us Section */}
      <section className="text-center my-5 p-5 contact-section bg-primary text-white">
        <h2>هل لديك استفسار؟</h2>
        <p>فريقنا جاهز للرد على أسئلتك وتقديم الدعم الذي تحتاجه.</p>
        <p>الهاتف: +123456789 | البريد الإلكتروني: info@qatrawater.com</p>
        <p>العنوان: شارع النموذج، المدينة، الدولة</p>
      </section>

    </Container>
  </>
);

export default Home;

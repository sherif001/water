// src/pages/ProductDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';

const ProductDetail = () => {
  const { id } = useParams(); // الحصول على معرف المنتج من الرابط
  const [product, setProduct] = React.useState(null);
  const [cart, setCart] = React.useState([]);

  React.useEffect(() => {
    // هنا يجب أن تستبدل هذا بالاستعلام عن المنتج من قاعدة البيانات أو ملف JSON
    const fetchProduct = async () => {
      // افترض أن لديك API لاسترجاع المنتج
      const response = await fetch(`/api/products/${id}`); // تأكد من وجود API
      const data = await response.json();
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  const addToCart = () => {
    if (product) {
      setCart((prevCart) => [...prevCart, product]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  if (!product) return <div>Loading...</div>;

  return (
    <Container className="my-5">
      <Card>
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Button variant="primary" onClick={addToCart}>أضف إلى عربة التسوق</Button>
          {/* عرض عربة التسوق */}
          <h2>عربة التسوق</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name}
                <Button variant="danger" onClick={() => removeFromCart(item.id)}>احذف</Button>
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProductDetail;

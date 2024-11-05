import React from 'react';
import 'font-awesome/css/font-awesome.min.css'; // تأكد من استيراد مكتبة Font Awesome

const Footer = () => (
  <footer className="bg-primary text-white text-center p-3 mt-5">
    <p>&copy; {new Date().getFullYear()} قطرة للمياه. جميع الحقوق محفوظة.</p>
    <div className="social-icons">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-facebook" aria-hidden="true"></i>
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-twitter" aria-hidden="true"></i>
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-instagram" aria-hidden="true"></i>
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-linkedin" aria-hidden="true"></i>
      </a>
    </div>
  </footer>
);

export default Footer;

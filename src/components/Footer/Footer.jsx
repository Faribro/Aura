import "./Footer.css";
import { Link } from "react-router-dom";
import { useProducts } from "../../contexts/productContext";

const Footer = () => {
  const { showFilter } = useProducts();

  return (
    <footer className={`${showFilter ? "hide-div" : null}`}>
      <div className="about">
        <Link to="/" className="nav-brand">
          Aura
        </Link>

        <div className="text">Choose from our wide variety of fragrances</div>

        <div className="social">
          <a href="https://github.com/Faribro" target="_blank">
            <i className="fa fa-github"></i>
          </a>
          <a href="https://twitter.com/" target="_blank">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/farid-sayyed/" target="_blank">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
      </div>

      <div className="quick-links">
        <div className="heading">Quick Links</div>
        <div className="sub-heading">
          <Link to="/products">Products</Link>
        </div>
        <div className="sub-heading">
          <Link to="/wishlist">Wishlist</Link>
        </div>
        <div className="sub-heading">
          <Link to="/cart">Cart</Link>
        </div>
      </div>

      <div className="contact">
        <div className="heading">Contact Us</div>

        <div className="sub-heading address">
          <i className="fa fa-map-marker"></i>Metro Junction Mall, Kalyan, Maharashtra.
        </div>
        <div className="sub-heading phone">
          <i className="fa fa-phone"></i>+91 21200 21200
        </div>
        <div className="sub-heading e-mail">
          <i className="fa fa-envelope"></i>support@Aura.com
        </div>
      </div>
    </footer>
  );
};

export { Footer };

import React from 'react';
import './Footer.css';
import { FaFacebook, FaTiktok, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="social-media">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="social-icon" />
                    </a>
                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                        <FaTiktok className="social-icon" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="social-icon" />
                    </a>
                </div>
                <div className="contact-info">
                    <p>Email: junoimportados@gmail.com</p>
                    <p>Teléfono: (0249) 15 4571161</p>
                </div>
                <div className="address">
                    <p>Dirección: Costa Rica 575</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Juno Clothes. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;

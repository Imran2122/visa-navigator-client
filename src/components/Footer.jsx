
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
            <nav>
                <h6 className="footer-title">Visa Services</h6>
                <a className="link link-hover">Visa Application</a>
                <a className="link link-hover">Visa Tracking</a>
                <a className="link link-hover">Visa Consultation</a>
                <a className="link link-hover">Immigration Assistance</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About Us</a>
                <a className="link link-hover">Contact Support</a>
                <a className="link link-hover">Customer Reviews</a>
                <a className="link link-hover">FAQs</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of Service</a>
                <a className="link link-hover">Privacy Policy</a>
                <a className="link link-hover">Refund Policy</a>
            </nav>
            <nav>
                <h6 className="footer-title">Connect With Us</h6>
                <a className="link link-hover">Facebook</a>
                <a className="link link-hover">LinkedIn</a>
                <a className="link link-hover">Twitter</a>
            </nav>
        </footer>
    );
};

export default Footer;

import React from 'react';

const Footer = () => {
    return (
        <footer className="footer bg-dark text-light overflow-hidden">
            <div className="container section">
                <div className="footer-grid grid-cols-3">

                    <div className="footer-brand">
                        <div className="flex-center gap-4 align-start mb-6">
                            <img src="/Milan-imperial.jpeg" alt="Logo" className="footer-logo rounded-full w-12 h-12" />
                            <h3 className="heading-md text-white m-0">Milan Imperial Limited</h3>
                        </div>
                        <p className="text-sm opacity-80 max-w-sm">
                            Premium management, consultancy, and procurement facilitating excellence across Aviation, Agriculture, and Infrastructure.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h4 className="heading-sm text-accent mb-6">Our Services</h4>
                        <ul className="space-y-4">
                            <li><a href="#charter" className="hover-text-white transition-colors">Private Charter Consultancy</a></li>
                            <li><a href="#agro" className="hover-text-white transition-colors">Agro-business & Farming</a></li>
                            <li><a href="#contracting" className="hover-text-white transition-colors">General Contracting</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4 className="heading-sm text-accent mb-6">Connect</h4>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <span className="text-accent">📍</span>
                                <span className="opacity-80 hover-text-white transition-colors">Global Headquarters</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-accent">✉️</span>
                                <a href="mailto:contact@milanimperial.com" className="opacity-80 hover-text-white transition-colors">contact@milanimperial.com</a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="footer-bottom mt-16 pt-8 border-t border-white-10 flex-between">
                    <p className="text-sm opacity-60">© {new Date().getFullYear()} Milan Imperial Limited. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href="#" className="opacity-60 hover-opacity-100 transition-opacity">Privacy</a>
                        <a href="#" className="opacity-60 hover-opacity-100 transition-opacity">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Private Charter', href: '#charter' },
        { name: 'Agro-Business', href: '#agro' },
        { name: 'General Contracting', href: '#contracting' },
        { name: 'About Us', href: '#about' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'glass scrolled' : ''}`}>
            <div className="container flex-between nav-inner">
                <a href="#" className="brand-logo">
                    <img src="/Milan-imperial.jpeg" alt="Milan Imperial Limited" className="logo-img" />
                    <span className="brand-text">Milan Imperial</span>
                </a>

                {/* Desktop Nav */}
                <div className="desktop-menu">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="nav-link">
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" className="btn btn-primary nav-cta">Request Consultation</a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-inner">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="mobile-link"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="btn btn-primary mobile-cta"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Request Consultation
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

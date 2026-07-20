import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Leaf, Building2 } from 'lucide-react';

const Features = () => {
    const features = [
        {
            id: 'charter',
            icon: <Plane size={32} />,
            title: 'Private Charter & Aviation',
            description: 'Bespoke consultancy, aircraft management, and VIP staffing. We assure unparalleled safety, privacy, and operational excellence for your global travels.',
            color: 'var(--color-primary)'
        },
        {
            id: 'agro',
            icon: <Leaf size={32} />,
            title: 'Agro-Business & Farming',
            description: 'Sustainable agricultural projects and agro-financing. End-to-end management spanning land procurement, yield optimization, and global market distribution.',
            color: 'var(--color-accent)'
        },
        {
            id: 'contracting',
            icon: <Building2 size={32} />,
            title: 'General Contracting',
            description: 'Facilitating complex infrastructure projects and supply chain logistics. Delivering precision scale from initial blueprints to final handover.',
            color: 'var(--color-primary-light)'
        }
    ];

    return (
        <section className="section bg-white" id="services">
            <div className="container">
                <div className="section-head text-center">
                    <h2 className="heading-lg">Our Core <span className="text-primary-light">Pillars</span></h2>
                    <p className="text-lead mx-auto mt-4">
                        Delivering elite management and procurement services across three distinct but synergistic industries.
                    </p>
                </div>

                <div className="features-grid grid-cols-3 mt-12">
                    {features.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="feature-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="feature-icon" style={{ color: item.color, background: `${item.color}15` }}>
                                {item.icon}
                            </div>
                            <h3 className="heading-md mt-6 mb-4">{item.title}</h3>
                            <p>{item.description}</p>
                            <a href={`#${item.id}`} className="feature-link mt-6 inline-flex text-accent font-semibold flex-center gap-2">
                                Discover More
                                <span className="arrow">→</span>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

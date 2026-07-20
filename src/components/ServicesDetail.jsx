import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ServiceSection = ({ id, tag, title, description, features, imageSide = 'left' }) => {
    return (
        <section className={`service-section ${imageSide === 'left' ? 'bg-sand' : 'bg-white'}`} id={id}>
            <div className="container overflow-hidden py-16">
                <div className={`flex flex-col md:flex-row gap-12 items-center ${imageSide === 'right' ? 'md:flex-row-reverse' : ''}`}>

                    <motion.div
                        className="w-full md:w-1/2"
                        initial={{ opacity: 0, x: imageSide === 'left' ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="abstract-image-placeholder relative rounded-2xl overflow-hidden aspect-video shadow-2xl bg-gradient-to-br from-primary to-primary-light">
                            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat mix-blend-overlay"></div>
                            {/* Optional: Add a real image here later */}
                            <div className="absolute inset-0 flex-center">
                                <span className="text-white opacity-50 text-xl font-bold tracking-widest uppercase">{tag} Excellence</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="w-full md:w-1/2"
                        initial={{ opacity: 0, x: imageSide === 'left' ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-sm font-bold tracking-widest text-accent uppercase mb-2 block">{tag}</span>
                        <h2 className="heading-md mb-6">{title}</h2>
                        <div className="text-body space-y-4 mb-8">
                            {description.map((paragraph, i) => (
                                <p key={i}>{paragraph}</p>
                            ))}
                        </div>

                        <ul className="space-y-3">
                            {features.map((feature, i) => (
                                <li key={i} className="flex-center !justify-start gap-4">
                                    <span className="h-6 w-6 rounded-full bg-accent text-white flex-center shrink-0">✓</span>
                                    <span className="font-medium text-dark">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

const ServicesDetail = () => {
    return (
        <div className="services-wrapper">
            <ServiceSection
                id="charter"
                tag="Aviation"
                title="Private Charter Consultancy & Management"
                description={[
                    "Our aviation division provides world-class private charter consultancy designed around absolute safety, unparalleled privacy, and maximum efficiency.",
                    "From strategic aircraft procurement to comprehensive management and VIP staffing, we offer end-to-end solutions for discerning individuals and corporate fleets globally. We navigate the complexities of international aviation regulations so you experience seamless travel."
                ]}
                features={[
                    "Bespoke Flight Itinerary Management",
                    "Global Aircraft Sourcing & Procurement",
                    "Elite Flight Crew & VIP Staffing",
                    "Regulatory Compliance & Fleet Optimization"
                ]}
                imageSide="right"
            />

            <ServiceSection
                id="agro"
                tag="Agriculture"
                title="Agro-Business, Farming & Financing"
                description={[
                    "We approach the agricultural sector with advanced agronomy principles and robust financial engineering. Milan Imperial develops and manages high-yield farming projects targeting sustainability and global food security.",
                    "Our ecosystem encompasses agro-financing, modern mechanized crop production, livestock management, and establishing seamless global supply chains spanning local farms to international markets."
                ]}
                features={[
                    "Large-Scale Mechanism & Smart Farming",
                    "Agro-Financing & Capital Structuring",
                    "Supply Chain Facilitation & Export Management",
                    "Sustainable Land Procurement"
                ]}
                imageSide="left"
            />

            <ServiceSection
                id="contracting"
                tag="Infrastructure"
                title="General Contracting & Facilitating"
                description={[
                    "Milan Imperial Limited directs complex infrastructure projects, providing unmatched precision and scale. As general contractors and facilitators, we handle procurement, logistics, and multi-disciplinary site management.",
                    "Whether bridging local suppliers with international vendors or overseeing multi-million dollar constructions, our focus remains on timely delivery, superior material quality, and stringent quality assurance."
                ]}
                features={[
                    "Comprehensive Project Management",
                    "International Supply Chain & Logistics",
                    "Heavy Machinery & Material Sourcing",
                    "Joint-Venture Facilitation & Consulting"
                ]}
                imageSide="right"
            />
        </div>
    );
};

export default ServicesDetail;

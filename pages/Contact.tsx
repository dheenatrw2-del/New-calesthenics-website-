import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';

const ContactInfoItem = ({ icon, title, content, href }: { icon: React.ReactNode; title: string; content: string; href?: string }) => (
    <div className="flex items-start">
        <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-gray-800 text-brand-red">
            {icon}
        </div>
        <div className="ml-4">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            {href ? (
                 <a href={href} className="text-gray-400 hover:text-brand-red transition-colors">{content}</a>
            ) : (
                <p className="text-gray-400">{content}</p>
            )}
        </div>
    </div>
);

const Contact = () => {
    const location = useLocation();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const program = params.get('program');
        if (program) {
            setFormData(prevData => ({
                ...prevData,
                message: `Hi, I'm interested in the "${program}" program. Please provide me with more details.`
            }));
        }
    }, [location.search]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('Sending...');

        try {
            // MOCK API SUBMISSION: Replace with an actual fetch POST request
            // const response = await fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData),
            // });
            // if (!response.ok) throw new Error('Network response was not ok.');
            
            await new Promise(resolve => setTimeout(resolve, 1500)); // Simulating network delay
            console.log("Form submitted:", formData);

            setStatus('Your message has been sent. We will get back to you shortly.');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Submission failed:', error);
            setStatus('Failed to send message. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <div className="py-24 bg-brand-dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center">
                    <h1 className="font-poppins text-5xl md:text-6xl font-extrabold text-white">Connect With <span className="text-brand-red">The Machine</span></h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">Have questions? Ready to start? We're here to help you begin your transformation.</p>
                </AnimatedSection>

                <div className="mt-20 flex flex-col lg:flex-row gap-16">
                    {/* Contact Form */}
                    <AnimatedSection className="lg:w-1/2 bg-black/30 border border-gray-800 p-8 rounded-lg">
                        <h2 className="font-poppins text-3xl font-bold text-white mb-6">Send a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                                <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-brand-red focus:border-brand-red" />
                            </div>
                             <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                                <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-brand-red focus:border-brand-red" />
                            </div>
                             <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                                <textarea name="message" id="message" rows={5} required value={formData.message} onChange={handleChange} className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-brand-red focus:border-brand-red" />
                            </div>
                            <div>
                                <Button type="submit" variant="primary" className="w-full justify-center text-lg" disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>
                            </div>
                            {status && <p className="text-center text-gray-400">{status}</p>}
                        </form>
                    </AnimatedSection>

                     {/* Contact Info */}
                     <AnimatedSection className="lg:w-1/2">
                         <div className="space-y-8">
                            <ContactInfoItem 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                                title="Location"
                                content="123 Fitness Ave, Velachery, Chennai, TN 600042"
                            />
                            <ContactInfoItem 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                                title="Email"
                                content="contact@zeromachine.fit"
                                href="mailto:contact@zeromachine.fit"
                            />
                            <ContactInfoItem 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
                                title="Phone"
                                content="+91 12345 67890"
                                href="tel:+911234567890"
                            />
                         </div>
                         <div className="mt-12">
                             <iframe 
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62204.59367201884!2d80.19047265820313!3d12.980483800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d6233a763a7%3A0x47f55f4a61361b73!2sVelachery%2C%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1678886400000!5m2!1sen!2sin" 
                                width="100%" 
                                height="300" 
                                style={{ border: 0 }} 
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-lg filter grayscale invert contrast-125 opacity-80"
                            ></iframe>
                         </div>
                     </AnimatedSection>
                </div>
            </div>
        </div>
    );
};

export default Contact;
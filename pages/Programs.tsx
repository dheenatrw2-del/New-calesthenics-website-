
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { programsData } from '../data/programs';
import { faqsData } from '../data/faqs';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';
import { Program, FAQ } from '../types';

const FAQItem = ({ faq }: { faq: FAQ }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-800 py-6">
            <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <svg className="w-6 h-6 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}
            >
                <p className="text-gray-400">{faq.answer}</p>
            </div>
        </div>
    );
};


const Programs = () => {
    const [programs, setPrograms] = useState<Program[]>([]);
    const [faqs, setFaqs] = useState<FAQ[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // MOCK API CALLS: Replace with actual fetches
                await new Promise(resolve => setTimeout(resolve, 1000));
                setPrograms(programsData);
                setFaqs(faqsData);
            } catch (err) {
                setError('Failed to load page data.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    return (
        <div className="py-24 bg-brand-dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center">
                    <h1 className="font-poppins text-5xl md:text-6xl font-extrabold text-white">Our Training <span className="text-brand-red">Programs</span></h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">Engineered for discipline, designed for results. Find the program that will unlock your potential.</p>
                </AnimatedSection>
                
                {loading && <div className="text-center text-gray-400 mt-20 text-xl">Loading Programs...</div>}
                {error && <div className="text-center text-brand-red mt-20 text-xl">{error}</div>}

                {!loading && !error && (
                    <>
                        <div className="mt-20 space-y-16">
                            {programs.map((program, index) => (
                                <AnimatedSection key={program.id}>
                                    <div className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                        <div className="md:w-1/2">
                                            <div className="border border-gray-800 p-10 rounded-lg bg-black/30 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-red/10 hover:border-brand-red/50">
                                                <h2 className="font-poppins text-4xl font-bold text-brand-red">{program.title}</h2>
                                                <p className="text-lg text-gray-300 mt-2">{program.subtitle}</p>
                                                <p className="mt-6 text-gray-400">{program.description}</p>
                                                <ul className="mt-8 space-y-3">
                                                    {program.features.map(feature => (
                                                         <li key={feature} className="flex items-center">
                                                            <svg className="w-5 h-5 mr-3 text-brand-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                            <span className="text-gray-300">{feature}</span>
                                                         </li>
                                                    ))}
                                                </ul>
                                                <div className="mt-10 flex items-center justify-between">
                                                    <p className="text-3xl font-poppins font-bold text-white">{program.price}</p>
                                                    <Link to={`/contact?program=${encodeURIComponent(program.title)}`}>
                                                        <Button variant='primary'>Join Now</Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="md:w-1/2">
                                             <img src={`https://picsum.photos/800/600?random=${program.id}&grayscale`} alt={program.title} className="rounded-lg shadow-2xl w-full h-auto object-cover"/>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                        
                        {/* FAQ Section */}
                        <AnimatedSection className="mt-32">
                            <div className="text-center">
                                 <h2 className="font-poppins text-4xl md:text-5xl font-bold text-white">Frequently Asked <span className="text-brand-red">Questions</span></h2>
                                 <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">Your questions, answered. If you don't see your question here, feel free to contact us.</p>
                            </div>
                            <div className="max-w-3xl mx-auto mt-12">
                                {faqs.map(faq => (
                                    // Fix: Wrapped FAQItem in React.Fragment and moved the key prop to it.
                                    // This prevents passing the 'key' prop to FAQItem, resolving the TypeScript error.
                                    <React.Fragment key={faq.id}>
                                        <FAQItem faq={faq} />
                                    </React.Fragment>
                                ))}
                            </div>
                        </AnimatedSection>
                    </>
                )}
            </div>
        </div>
    );
};

export default Programs;

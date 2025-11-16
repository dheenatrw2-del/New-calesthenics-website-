
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { galleryData } from '../data/gallery';
import AnimatedSection from '../components/AnimatedSection';
import { Transformation } from '../types';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [gallery, setGallery] = useState<Transformation[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchGallery = async () => {
            try {
                // MOCK API CALL: Replace with actual fetch
                await new Promise(resolve => setTimeout(resolve, 1000));
                setGallery(galleryData);
            } catch (err) {
                setError('Failed to load transformations.');
            } finally {
                setLoading(false);
            }
        };
        fetchGallery();
    }, []);

    const nextSlide = () => {
        if (gallery.length === 0) return;
        setCurrentSlide((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        if (gallery.length === 0) return;
        setCurrentSlide((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
    };


    return (
        <div className="space-y-24 md:space-y-32 pb-24">
            {/* Hero Section */}
            <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
                <div
                    className="absolute top-0 left-0 w-full h-full object-cover z-0 bg-cover bg-center"
                     style={{ backgroundImage: `url('https://picsum.photos/1920/1080?random=99&grayscale&blur=2')` }}
                >
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10"></div>
                <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.4)_0%,_rgba(220,38,38,0)_60%)] z-10"></div>

                <div className="relative z-20 container mx-auto px-4 animate-fade-in">
                    <h1 className="font-poppins text-4xl md:text-5xl font-bold uppercase tracking-wider text-gray-300">
                        Redefine Strength
                    </h1>
                    <h2 className="font-poppins text-6xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-wider mt-2">
                        Rebuild <span className="text-brand-red">Discipline</span>.
                    </h2>
                    <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
                        Zero Machine is a modern calisthenics studio that transforms your body and mindset. No excuses. Just results.
                    </p>
                    <div className="mt-12">
                        <Link to="/programs">
                            <Button variant="primary" className="text-lg">Join The Movement</Button>
                        </Link>
                    </div>
                     <div className="w-48 h-0.5 bg-gray-700 mt-12 mx-auto relative">
                        <div className="w-2.5 h-2.5 bg-brand-red rounded-full absolute top-1/2 -translate-y-1/2" style={{left: '30%'}} />
                    </div>
                </div>
            </section>
            
            {/* About Snapshot */}
            <AnimatedSection className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2 text-center md:text-left">
                        <h2 className="font-poppins text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">About <span className="text-brand-red">Us</span></h2>
                        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
                            Zero Machine was forged from a fundamental truth: the modern world makes us weak. We use calisthenics not as a workout, but as a path back to self-mastery. It teaches you to control your body, build strength from within, and cultivate a level of mental toughness that no machine in a gym can provide.
                        </p>
                        <div className="mt-8">
                           <Link to="/about">
                                <Button variant="secondary">Learn More</Button>
                           </Link>
                        </div>
                    </div>
                     <div className="md:w-1/2 relative">
                        <img src="https://picsum.photos/600/700?random=10&grayscale" alt="Dheen, Founder of Zero Machine" className="rounded-lg shadow-2xl w-full h-auto object-cover" />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.3)_0%,_rgba(220,38,38,0)_70%)] opacity-80"></div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Transformations Slider */}
            <AnimatedSection className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="font-poppins text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Body <span className="text-brand-red">Transformation</span></h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">Change Your Life With Our Calisthenics Program.</p>
                </div>
                <div className="mt-12 max-w-4xl mx-auto relative min-h-[400px]">
                    {loading && <div className="text-center text-gray-500 dark:text-gray-400">Loading Transformations...</div>}
                    {error && <div className="text-center text-brand-red">{error}</div>}
                    {!loading && !error && (
                        <>
                            <div className="overflow-hidden rounded-lg">
                                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                                    {gallery.map((item) => (
                                        <div key={item.id} className="w-full flex-shrink-0">
                                            <div className="flex flex-col sm:flex-row gap-4">
                                                <div className="w-full sm:w-1/2 relative">
                                                    <img src={item.beforeUrl} alt={`${item.name} before`} className="object-cover w-full h-full rounded" />
                                                    <div className="absolute top-2 left-2 bg-black/50 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider text-white">Before</div>
                                                </div>
                                                <div className="w-full sm:w-1/2 relative">
                                                    <img src={item.afterUrl} alt={`${item.name} after`} className="object-cover w-full h-full rounded" />
                                                    <div className="absolute top-2 left-2 bg-brand-red/80 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider text-white">After</div>
                                                </div>
                                            </div>
                                            <div className="text-center mt-6">
                                                <h3 className="font-poppins text-2xl font-bold text-gray-900 dark:text-white">{item.name}</h3>
                                                <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-md mx-auto">"{item.story}"</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <button onClick={prevSlide} className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16 bg-white/70 dark:bg-gray-800/70 p-3 rounded-full text-gray-900 dark:text-white hover:bg-brand-red hover:text-white transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-brand-red">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                            </button>
                            <button onClick={nextSlide} className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16 bg-white/70 dark:bg-gray-800/70 p-3 rounded-full text-gray-900 dark:text-white hover:bg-brand-red hover:text-white transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-brand-red">
                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </>
                    )}
                </div>
                 <div className="text-center mt-12">
                    <Link to="/transformations">
                        <Button variant="secondary">View Full Gallery</Button>
                    </Link>
                </div>
            </AnimatedSection>
        </div>
    );
};

export default Home;

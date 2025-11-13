
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const About = () => {
    return (
        <div className="py-24 bg-brand-dark space-y-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center">
                    <h1 className="font-poppins text-5xl md:text-6xl font-extrabold text-white">The Philosophy of <span className="text-brand-red">Zero Machine</span></h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-400">We are more than a studio. We are a system for building better humans, inside and out.</p>
                </AnimatedSection>

                <AnimatedSection className="mt-20">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="lg:w-1/2">
                             <img src="https://picsum.photos/800/1000?random=10&grayscale" alt="Dheen, Founder of Zero Machine" className="rounded-lg shadow-2xl object-cover w-full h-full" />
                        </div>
                        <div className="lg:w-1/2 space-y-6">
                            <h2 className="font-poppins text-4xl font-bold text-white">Dheen's <span className="text-brand-red">Vision</span></h2>
                            <p className="text-gray-300 leading-relaxed">
                                Zero Machine was forged from a fundamental truth: the modern world makes us weak. Comfortable chairs, convenient food, and a lack of real physical challenge have disconnected us from our bodies' true potential.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                I discovered calisthenics not as a workout, but as a path back to self-mastery. It teaches you to control your body in space, to build strength from within, and to cultivate a level of mental toughness that no machine in a gym can provide.
                            </p>
                             <p className="text-gray-300 leading-relaxed">
                                My mission is to share this path. To provide a space where anyone, regardless of their starting point, can learn to train like a machine—with precision, efficiency, and unwavering discipline. This is about more than fitness; it's about reclaiming your power.
                            </p>
                        </div>
                    </div>
                </AnimatedSection>
                
                <AnimatedSection className="mt-24">
                    <div className="bg-black/30 border-t-4 border-brand-red p-12 rounded-lg text-center">
                        <h3 className="font-poppins text-4xl font-extrabold text-white italic tracking-wide">
                            "We don't train muscles. <br/> We train <span className="text-brand-red drop-shadow-[0_0_8px_#DC2626]">discipline</span>."
                        </h3>
                    </div>
                </AnimatedSection>
                
                <AnimatedSection className="mt-24">
                    <h2 className="font-poppins text-4xl font-bold text-center text-white">The <span className="text-brand-red">Studio</span></h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400 text-center">A space engineered for focus and performance. No distractions, only the tools you need to master your bodyweight.</p>
                     <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="col-span-2 row-span-2 rounded-lg overflow-hidden">
                            <img src="https://picsum.photos/800/800?random=1&grayscale" alt="Studio Image 1" className="w-full h-full object-cover" />
                        </div>
                        <div className="rounded-lg overflow-hidden">
                            <img src="https://picsum.photos/400/400?random=2&grayscale" alt="Studio Image 2" className="w-full h-full object-cover" />
                        </div>
                        <div className="rounded-lg overflow-hidden">
                           <img src="https://picsum.photos/400/400?random=3&grayscale" alt="Studio Image 3" className="w-full h-full object-cover" />
                        </div>
                         <div className="col-span-2 rounded-lg overflow-hidden">
                           <img src="https://picsum.photos/800/400?random=4&grayscale" alt="Studio Image 4" className="w-full h-full object-cover" />
                        </div>
                         <div className="col-span-2 md:col-span-4 rounded-lg overflow-hidden">
                           <img src="https://picsum.photos/1200/400?random=5&grayscale" alt="Studio Image 5" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default About;


import React, { useState, useEffect } from 'react';
import { galleryData } from '../data/gallery';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';
import { Link } from 'react-router-dom';
import { Transformation } from '../types';

const TransformationCard = ({ transformation }: { transformation: Transformation }) => {
    return (
        <div className="bg-white dark:bg-black/30 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden h-full flex flex-col shadow-lg dark:shadow-none">
            <div className="flex">
                <div className="w-1/2 relative">
                    <img src={transformation.beforeUrl} alt={`${transformation.name} before`} className="object-cover w-full h-full aspect-[2/3]" />
                     <div className="absolute top-2 left-2 bg-black/50 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider text-white">Before</div>
                </div>
                <div className="w-1/2 relative">
                    <img src={transformation.afterUrl} alt={`${transformation.name} after`} className="object-cover w-full h-full aspect-[2/3]" />
                     <div className="absolute top-2 left-2 bg-brand-red/80 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider text-white">After</div>
                </div>
            </div>
             <div className="p-6 text-center bg-gray-50 dark:bg-gray-900/50 flex-grow flex flex-col justify-center">
                 <h3 className="font-poppins text-2xl font-bold text-gray-900 dark:text-white">{transformation.name}</h3>
                 <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{transformation.story}</p>
            </div>
        </div>
    );
};

const Transformations = () => {
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

    return (
        <div className="py-24 bg-white dark:bg-brand-dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center">
                    <h1 className="font-poppins text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white">Real People. <span className="text-brand-red">Real Results.</span></h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">These aren't just photos. They are proof of dedication, discipline, and the power of bodyweight mastery.</p>
                </AnimatedSection>

                {loading && <div className="text-center text-gray-500 dark:text-gray-400 mt-20 text-xl">Loading Gallery...</div>}
                {error && <div className="text-center text-brand-red mt-20 text-xl">{error}</div>}

                {!loading && !error && (
                    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {gallery.map((item, index) => (
                             <AnimatedSection key={item.id} style={{ transitionDelay: `${index * 100}ms` }}>
                                 <TransformationCard transformation={item} />
                             </AnimatedSection>
                        ))}
                    </div>
                )}
                
                 <AnimatedSection className="text-center mt-24">
                     <h2 className="font-poppins text-4xl font-bold text-gray-900 dark:text-white">Become The Next <span className="text-brand-red">Transformation</span></h2>
                     <p className="mt-4 max-w-xl mx-auto text-gray-600 dark:text-gray-400">Your story is waiting to be written. The only thing missing is your commitment.</p>
                     <div className="mt-8">
                         <Link to="/contact">
                            <Button variant="primary">Start Your Journey</Button>
                         </Link>
                     </div>
                 </AnimatedSection>
            </div>
        </div>
    );
};

export default Transformations;

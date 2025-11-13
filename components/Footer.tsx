
import React from 'react';
import { Link } from 'react-router-dom';

const SocialIcon = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-red transition duration-300">
        {children}
    </a>
);

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
     <Link to={to} className="text-base text-gray-400 hover:text-white transition-colors duration-300">{children}</Link>
)

const Footer = () => {
    return (
        <footer className="bg-black/50 border-t border-gray-800/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
               <div className="flex flex-col items-center text-center">
                    {/* Brand Info */}
                     <h2 className="text-2xl font-poppins font-extrabold tracking-widest text-white uppercase">
                        ZERO MACHINE
                    </h2>
                    <p className="mt-2 text-gray-400 text-sm">Redefine Strength. Rebuild Discipline.</p>
                   
                    {/* Quick Links */}
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8">
                        {/* Fix: Added children to FooterLink components to satisfy the 'children' prop requirement. */}
                        <FooterLink to="/programs">Programs</FooterLink>
                        <FooterLink to="/transformations">Gallery</FooterLink>
                        <FooterLink to="/about">About Us</FooterLink>
                        <FooterLink to="/contact">Contact</FooterLink>
                    </div>

                    {/* Social Icons */}
                     <div className="flex space-x-6 mt-8">
                       {/* Fix: Added SVG children to SocialIcon components to satisfy the 'children' prop requirement. */}
                       <SocialIcon href="#">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                       </SocialIcon>
                       <SocialIcon href="#">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.147 2 12.315 2zm-1.002 6.363a4.638 4.638 0 11-3.292 7.98 4.638 4.638 0 013.292-7.98zm-5.405 1.522a.96.96 0 100 1.92.96.96 0 000-1.92z" clipRule="evenodd" /></svg>
                       </SocialIcon>
                        <SocialIcon href="#">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.701V8.115l6.5 4.538-6.5 3.232z" /></svg>
                        </SocialIcon>
                    </div>

                    <div className="mt-10 border-t border-gray-800 w-full pt-8 text-center text-sm text-gray-500">
                        <p>&copy; {new Date().getFullYear()} Zero Machine. All rights reserved. Designed and built with discipline.</p>
                    </div>
               </div>
            </div>
        </footer>
    );
};

export default Footer;

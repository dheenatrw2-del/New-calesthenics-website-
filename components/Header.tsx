
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => setIsOpen(false);

    const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
        `transition duration-300 uppercase font-semibold tracking-wider text-sm ${isActive ? 'text-brand-red' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`;

    return (
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-brand-dark/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <NavLink to="/" className="flex-shrink-0">
                        <h1 className="text-2xl font-poppins font-extrabold tracking-widest text-gray-900 dark:text-white uppercase">
                           ZERO MACHINE
                        </h1>
                    </NavLink>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <NavLink to="/" className={navLinkClasses}>Welcome</NavLink>
                        <NavLink to="/programs" className={navLinkClasses}>Programs</NavLink>
                        <NavLink to="/transformations" className={navLinkClasses}>Gallery</NavLink>
                        <NavLink to="/about" className={navLinkClasses}>About</NavLink>
                        <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
                        <ThemeToggle />
                    </nav>
                    
                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                         <ThemeToggle />
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-white/95 dark:bg-brand-dark/95 backdrop-blur-lg">
                    <div className="flex flex-col items-center space-y-6 py-8">
                        <NavLink to="/" onClick={closeMenu} className="text-lg text-gray-600 dark:text-gray-300 hover:text-brand-red">Welcome</NavLink>
                        <NavLink to="/programs" onClick={closeMenu} className="text-lg text-gray-600 dark:text-gray-300 hover:text-brand-red">Programs</NavLink>
                        <NavLink to="/transformations" onClick={closeMenu} className="text-lg text-gray-600 dark:text-gray-300 hover:text-brand-red">Gallery</NavLink>
                        <NavLink to="/about" onClick={closeMenu} className="text-lg text-gray-600 dark:text-gray-300 hover:text-brand-red">About</NavLink>
                        <NavLink to="/contact" onClick={closeMenu} className="text-lg text-gray-600 dark:text-gray-300 hover:text-brand-red">Contact</NavLink>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;

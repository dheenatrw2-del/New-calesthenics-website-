
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseClasses = "font-poppins font-bold uppercase tracking-wider px-8 py-3 rounded-sm transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark";

    const variantClasses = variant === 'primary'
        ? "bg-brand-red text-white hover:bg-red-700 focus:ring-brand-red"
        : "border border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white";

    return (
        <button className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
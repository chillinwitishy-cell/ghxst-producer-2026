import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'hero' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'md', 
  size = 'md', 
  className = '', 
  children, 
  asChild,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200';
  
  const variantClasses = {
    hero: 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:opacity-90 shadow-lg',
    ghost: 'bg-transparent text-gray-300 hover:bg-white/10 border border-white/20',
    glass: 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, { className: classes });
  }
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
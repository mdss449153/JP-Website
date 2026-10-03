import React from 'react';

interface JustPromotLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'mark';
  theme?: 'dark' | 'light';
}

export const JustPromotLogo: React.FC<JustPromotLogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const heightClass = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10 sm:h-11 sm:w-11',
    lg: 'h-12 w-12 sm:h-14 sm:w-14',
    xl: 'h-16 w-16',
  }[size];

  return (
    <img
      src="/Just Promot logo.png"
      alt="JustPromot"
      className={`${heightClass} object-contain rounded-full block ${className}`}
    />
  );
};

export default JustPromotLogo;

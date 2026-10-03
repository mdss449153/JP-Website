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
    sm: 'h-6 sm:h-7 w-auto',
    md: 'h-8 sm:h-9 w-auto',
    lg: 'h-10 sm:h-12 w-auto',
    xl: 'h-14 sm:h-16 w-auto',
  }[size];

  return (
    <img
      src="/jp.png"
      alt="JP Logo"
      className={`${heightClass} object-contain block ${className}`}
    />
  );
};

export default JustPromotLogo;

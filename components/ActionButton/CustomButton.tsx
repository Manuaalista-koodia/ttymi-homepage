import React from 'react';
import Link from 'next/link';

interface CustomButtonProps {
  href: string;
  label: string;
  className?: string;
  variant?: 'large' | 'medium' | 'small';
}

export const CustomButton: React.FC<CustomButtonProps> = ({ href, label, className = '', variant = 'large' }) => {
  const getSizeClasses = () => {
    switch (variant) {
      case 'small':
        return 'px-4 py-0';
      case 'medium':
        return 'px-6 py-0';
      case 'large':
      default:
        return 'px-8 py-0';
    }
  };

  const getTextSizeClasses = () => {
    switch (variant) {
      case 'small':
        return 'text-sm my-2 mx-1';
      case 'medium':
        return 'text-lg my-3 mx-1.5';
      case 'large':
      default:
        return 'text-2xl my-4 mx-2';
    }
  };

  const getTriangleSize = () => {
    switch (variant) {
      case 'small':
        return 'border-t-[5px] border-b-[5px] border-l-[9px]';
      case 'medium':
        return 'border-t-[8px] border-b-[8px] border-l-[14px]';
      case 'large':
      default:
        return 'border-t-[11px] border-b-[11px] border-l-[20px]';
    }
  };

  const getMarginClasses = () => {
    switch (variant) {
      case 'small':
        return 'mr-2 ml-1';
      case 'medium':
        return 'mr-3 ml-1.5';
      case 'large':
      default:
        return 'mr-4 ml-2';
    }
  };

  const getGapClass = () => {
    switch (variant) {
      case 'small':
        return 'gap-1.5';
      case 'medium':
        return 'gap-2';
      case 'large':
      default:
        return 'gap-3';
    }
  };

  return (
    <Link
      href={href}
      className={`inline-flex flex-row items-center bg-white text-ttymi-green font-montserrat font-bold border-2 border-transparent shadow-ttymi rounded-2xl cursor-pointer transition-all duration-150 ease-in-out hover:bg-ttymi-green hover:text-white hover:border-white group ${getGapClass()} ${getSizeClasses()} ${className}`}
    >
      <div
        className={`flex-shrink-0 border-transparent border-t-transparent border-b-transparent border-l-ttymi-green group-hover:border-l-white transition-colors duration-150 ease-in-out ${getTriangleSize()} ${getMarginClasses()}`}
      />
      <span className={`font-bold tracking-wide ${getTextSizeClasses()}`}>{label}</span>
    </Link>
  );
};

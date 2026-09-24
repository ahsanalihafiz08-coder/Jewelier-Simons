import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

/** Official WhatsApp Brand Logo with authentic #25D366 background & white glyph */
export const WhatsAppLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', size }) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    aria-hidden="true"
  >
    <circle cx="16" cy="16" r="16" fill="#25D366" />
    <path
      d="M23.5 8.5C21.5 6.5 18.9 5.4 16.1 5.4C10.3 5.4 5.6 10.1 5.6 15.9C5.6 17.8 6.1 19.6 7 21.2L5.5 26.5L11 25.1C12.5 25.9 14.3 26.4 16.1 26.4C21.9 26.4 26.6 21.7 26.6 15.9C26.6 13.1 25.5 10.5 23.5 8.5ZM16.1 24.6C14.5 24.6 12.9 24.2 11.6 23.4L11.3 23.2L8.1 24L9 20.9L8.7 20.5C7.9 19.1 7.4 17.5 7.4 15.9C7.4 11.1 11.3 7.2 16.1 7.2C18.4 7.2 20.6 8.1 22.2 9.8C23.9 11.4 24.8 13.6 24.8 15.9C24.8 20.7 20.9 24.6 16.1 24.6ZM20.9 18.2C20.6 18.1 19.3 17.4 19.1 17.3C18.8 17.2 18.7 17.2 18.5 17.4C18.3 17.7 17.9 18.3 17.7 18.5C17.6 18.7 17.4 18.7 17.1 18.6C16.9 18.5 16 18.2 14.9 17.2C14.1 16.5 13.5 15.6 13.3 15.3C13.2 15.1 13.3 14.9 13.4 14.8C13.6 14.7 13.7 14.5 13.9 14.3C14 14.2 14.1 14 14.2 13.9C14.3 13.7 14.2 13.6 14.2 13.5C14.1 13.4 13.7 12.3 13.5 11.8C13.3 11.3 13.1 11.4 12.9 11.4C12.8 11.4 12.6 11.4 12.4 11.4C12.2 11.4 11.9 11.5 11.7 11.7C11.5 11.9 10.9 12.5 10.9 13.6C10.9 14.7 11.7 15.8 11.9 16C12 16.1 13.7 18.8 16.2 19.9C16.8 20.2 17.3 20.3 17.7 20.5C18.4 20.7 19 20.7 19.5 20.6C20.1 20.5 21.2 19.9 21.5 19.2C21.7 18.5 21.7 17.8 21.6 17.7C21.5 17.6 21.3 17.5 20.9 17.4V18.2Z"
      fill="#FFFFFF"
    />
  </svg>
);

/** Official Facebook Brand Logo with authentic #1877F2 blue circle & white 'f' */
export const FacebookLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', size }) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    aria-hidden="true"
  >
    <circle cx="16" cy="16" r="16" fill="#1877F2" />
    <path
      d="M21.2 16.1L21.7 12.7H18.4V10.5C18.4 9.6 18.8 8.7 20.2 8.7H21.8V5.8C21.8 5.8 20.3 5.5 18.9 5.5C16 5.5 14.1 7.3 14.1 10.5V12.7H11.1V16.1H14.1V24.4C14.7 24.5 15.3 24.6 16 24.6C16.7 24.6 17.3 24.5 17.9 24.4V16.1H21.2Z"
      fill="#FFFFFF"
    />
  </svg>
);

/** Official Instagram Brand Logo with signature brand gradient & white camera glyph */
export const InstagramLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', size }) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="ig-official-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f09433" />
        <stop offset="25%" stopColor="#e6683c" />
        <stop offset="50%" stopColor="#dc2743" />
        <stop offset="75%" stopColor="#cc2366" />
        <stop offset="100%" stopColor="#bc1888" />
      </linearGradient>
    </defs>
    <rect width="32" height="32" rx="8" fill="url(#ig-official-gradient)" />
    <path
      d="M16 9.8C12.6 9.8 9.8 12.6 9.8 16C9.8 19.4 12.6 22.2 16 22.2C19.4 22.2 22.2 19.4 22.2 16C22.2 12.6 19.4 9.8 16 9.8ZM16 20C13.8 20 12 18.2 12 16C12 13.8 13.8 12 16 12C18.2 12 20 13.8 20 16C20 18.2 18.2 20 16 20Z"
      fill="#FFFFFF"
    />
    <path
      d="M22.5 8.1C21.7 8.1 21 8.8 21 9.6C21 10.4 21.7 11.1 22.5 11.1C23.3 11.1 24 10.4 24 9.6C24 8.8 23.3 8.1 22.5 8.1Z"
      fill="#FFFFFF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.3 5.4H9.7C7.3 5.4 5.4 7.3 5.4 9.7V22.3C5.4 24.7 7.3 26.6 9.7 26.6H22.3C24.7 26.6 26.6 24.7 26.6 22.3V9.7C26.6 7.3 24.7 5.4 22.3 5.4ZM24.4 22.3C24.4 23.5 23.5 24.4 22.3 24.4H9.7C8.5 24.4 7.6 23.5 7.6 22.3V9.7C7.6 8.5 8.5 7.6 9.7 7.6H22.3C23.5 7.6 24.4 8.5 24.4 9.7V22.3Z"
      fill="#FFFFFF"
    />
  </svg>
);

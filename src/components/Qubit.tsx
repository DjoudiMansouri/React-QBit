import React from 'react';

export interface QubitProps {
  id: string;
  value?: '0' | '1' | '+' | '-';
  className?: string;
  children?: React.ReactNode;
}

export const Qubit: React.FC<QubitProps> = ({ id, value = '0', className = '', children }) => {
  return (
    <div id={id} className={`qubit animate-quantum-pulse ${className}`} data-value={value}>
      {value}
      {children}
    </div>
  );
};
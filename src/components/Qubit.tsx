import * as React from 'react';

export interface QubitProps {
  id: string;
  value?: '0' | '1' | '+' | '-';
  className?: string;
  children?: React.ReactNode;
}

export const Qubit = ({ 
  id, 
  value = '0', 
  className = '', 
  children 
}: QubitProps) => {
  return (
    <div id={id} className={`qubit animate-quantum-pulse ${className}`} data-value={value}>
      {value}
      {children}
    </div>
  );
};
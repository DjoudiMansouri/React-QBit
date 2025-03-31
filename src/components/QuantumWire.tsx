import React from 'react';

export interface QuantumWireProps {
  qubitId: string;
  className?: string;
}

export const QuantumWire: React.FC<QuantumWireProps> = ({ qubitId, className = '' }) => {
  return (
    <div className={`quantum-wire w-full ${className}`} data-qubit-id={qubitId}></div>
  );
};
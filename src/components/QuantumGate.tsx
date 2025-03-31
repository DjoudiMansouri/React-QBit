import React from 'react';

export type GateType = 'H' | 'X' | 'Y' | 'Z' | 'CNOT' | 'T' | 'S';

export interface QuantumGateProps {
  type: GateType;
  targets: string[];
  controls?: string[];
  className?: string;
  onClick?: () => void;
}

export const QuantumGate: React.FC<QuantumGateProps> = ({ 
  type, 
  targets, 
  controls = [], 
  className = '',
  onClick
}) => {
  return (
    <div 
      className={`quantum-gate ${className}`} 
      data-gate-type={type}
      data-targets={targets.join(',')}
      data-controls={controls.join(',')}
      onClick={onClick}
    >
      {type}
    </div>
  );
};
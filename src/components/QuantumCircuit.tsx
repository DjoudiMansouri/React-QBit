// src/components/QuantumCircuit.tsx
import React, { useState } from 'react';

export interface QuantumCircuitProps {
  qubits: number;
  className?: string;
  children?: React.ReactNode;
}

export interface QuantumState {
  states: string[];
  probabilities: number[];
}

export const QuantumCircuit: React.FC<QuantumCircuitProps> = ({ 
  qubits, 
  className = '',
  children 
}) => {
  const [simulating, setSimulating] = useState(false);
  const [results, setResults] = useState<QuantumState | null>(null);
  
  const runSimulation = () => {
    setSimulating(true);
    
    // Simulate quantum processing...
    setTimeout(() => {
      // Generate pseudo-random "quantum" results
      const possibleStates = generatePossibleStates(qubits);
      const probabilities = generateProbabilities(possibleStates.length);
      
      setResults({
        states: possibleStates,
        probabilities: probabilities
      });
      
      setSimulating(false);
    }, 1500);
  };
  
  // Generate all possible binary combinations for a certain number of qubits
  const generatePossibleStates = (numQubits: number): string[] => {
    const states: string[] = [];
    const totalStates = Math.pow(2, numQubits);
    
    for (let i = 0; i < totalStates; i++) {
      const binaryString = i.toString(2).padStart(numQubits, '0');
      const ketNotation = `|${binaryString}⟩`;
      states.push(ketNotation);
    }
    
    return states;
  };
  
  // Generate random probabilities that sum to 1
  const generateProbabilities = (numStates: number): number[] => {
    const rawValues: number[] = [];
    let sum = 0;
    
    // Generate random values
    for (let i = 0; i < numStates; i++) {
      const val = Math.random();
      rawValues.push(val);
      sum += val;
    }
    
    // Normalize so the sum equals 1
    return rawValues.map(val => Number((val / sum).toFixed(4)));
  };
  
  return (
    <div className={`p-4 border-2 border-[#4C1D95] rounded-lg ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-[#6D28D9]">Quantum Circuit ({qubits} qubits)</h3>
        <button 
          className="px-4 py-2 bg-[#6D28D9] text-white rounded-md hover:bg-[#4C1D95] transition-colors"
          onClick={runSimulation}
          disabled={simulating}
        >
          {simulating ? 'Simulating...' : 'Simulate'}
        </button>
      </div>
      <div className="space-y-4 mb-4">
        {children}
      </div>
      
      {results && (
        <div className="mt-6 p-4 bg-[#F3F4F6] rounded-lg border border-[#C4B5FD]">
          <h4 className="text-md font-semibold text-[#6D28D9] mb-2">Quantum Superposition Result</h4>
          <div className="grid grid-cols-2 gap-2">
            {results.states.map((state, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="font-mono">{state}</span>
                <div className="flex items-center">
                  <div 
                    className="h-4 bg-[#6D28D9]" 
                    style={{ width: `${results.probabilities[index] * 100}px` }}
                  ></div>
                  <span className="ml-2 text-sm">{(results.probabilities[index] * 100).toFixed(1)}%</span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-gray-500 italic">
            Probability amplitude for each possible basis state
          </p>
        </div>
      )}
    </div>
  );
};
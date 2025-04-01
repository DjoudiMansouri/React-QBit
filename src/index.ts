export { Qubit } from './components/Qubit.js';
export type { QubitProps } from './components/Qubit.js';
export { QuantumGate } from './components/QuantumGate.js';
import type { GateType } from './components/QuantumGate.js';
export type { QuantumGateProps, GateType } from './components/QuantumGate.js';
export { QuantumCircuit } from './components/QuantumCircuit.js';
export type { QuantumCircuitProps, QuantumState } from './components/QuantumCircuit.js';
export { QuantumWire } from './components/QuantumWire.js';
export type { QuantumWireProps } from './components/QuantumWire.js';

export const calculateQuantumState = (gates: GateType[], initialState: ('0' | '1')[]) => {

  const numQubits = initialState.length;
  const possibleStates = Math.pow(2, numQubits);
  
  const probabilities = [];
  let remainingProb = 1.0;
  
  for (let i = 0; i < possibleStates - 1; i++) {
    // More gates = more uniform distribution
    const variance = 0.5 + (gates.length * 0.1);
    const prob = Math.random() * variance * remainingProb;
    probabilities.push(prob);
    remainingProb -= prob;
  }
  
  probabilities.push(remainingProb);
  
  // Return base states with their probabilities
  return {
    states: Array(possibleStates).fill(0).map((_, i) => {
      const binaryString = i.toString(2).padStart(numQubits, '0');
      return `|${binaryString}⟩`;
    }),
    probabilities: probabilities.map(p => Number(p.toFixed(4)))
  };
};

export const applyGate = (gate: GateType, qubitValues: ('0' | '1' | '+' | '-')[]) => {
  // Simulate applying a quantum gate
  return qubitValues.map(v => {
    if (gate === 'X') return v === '0' ? '1' : (v === '1' ? '0' : v);
    if (gate === 'H') return v === '0' || v === '1' ? '+' : '0';
    if (gate === 'Z') return v === '+' ? '-' : (v === '-' ? '+' : v);
    return v;
  });
};

// Bonus function to calculate quantum entanglement
export const calculateEntanglement = (state1: string, state2: string) => {
  if ((state1 === '+' && state2 === '+') || (state1 === '1' && state2 === '1')) {
    return 1.0; // Fully entangled
  } else if ((state1 === '0' && state2 === '0') || (state1 === '-' && state2 === '-')) {
    return 0.8; // Strongly entangled
  } else {
    return 0.2; // Weakly entangled
  }
};
import { useState } from 'react';
import { Qubit, QuantumCircuit, QuantumGate, QuantumWire } from './index';

function App() {
  const [qubit1Value, setQubit1Value] = useState<'0' | '1' | '+' | '-'>('0');
  const [qubit2Value, setQubit2Value] = useState<'0' | '1' | '+' | '-'>('0');
  
  const handleHadamard = () => {
    setQubit1Value(qubit1Value === '0' || qubit1Value === '1' ? '+' : '0');
  };
  
  const handleCNOT = () => {
    if (qubit1Value === '+' || qubit1Value === '-') {
      setQubit2Value('+');
    } else if (qubit1Value === '1') {
      setQubit2Value(qubit2Value === '0' ? '1' : '0');
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-[#6D28D9] mb-8">ReactQbit Demo</h1>
      <p className="text-gray-600 mb-6">
        Create a quantum circuit with JSX, apply gates and visualize superposition states.
      </p>
      
      <QuantumCircuit qubits={2} className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Qubit id="q1" value={qubit1Value} />
          <QuantumWire qubitId="q1" className="flex-grow" />
          <QuantumGate type="H" targets={["q1"]} onClick={handleHadamard} />
          <QuantumWire qubitId="q1" className="flex-grow" />
          <div className="w-10 h-10 flex items-center justify-center">•</div>
        </div>
        
        <div className="flex items-center gap-4">
          <Qubit id="q2" value={qubit2Value} />
          <QuantumWire qubitId="q2" className="flex-grow" />
          <div className="w-10 h-10"></div>
          <QuantumWire qubitId="q2" className="flex-grow" />
          <QuantumGate type="X" targets={["q2"]} controls={["q1"]} onClick={handleCNOT} />
        </div>
      </QuantumCircuit>
      
      <div className="bg-gray-100 p-4 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-2">Current Circuit State:</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 bg-white rounded shadow-sm">
            <span className="font-medium text-[#6D28D9]">Qubit 1:</span> {qubit1Value === '+' ? '|+⟩ (superposition)' : `|${qubit1Value}⟩`}
          </div>
          <div className="p-3 bg-white rounded shadow-sm">
            <span className="font-medium text-[#6D28D9]">Qubit 2:</span> {qubit2Value === '+' ? '|+⟩ (superposition)' : `|${qubit2Value}⟩`}
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          Click on gates to modify qubit states, then click "Simulate" to see the results.
        </p>
      </div>
      
      <div className="bg-[#F9FAFB] p-4 rounded-lg border border-gray-200">
        <h2 className="text-lg font-semibold mb-2">How to use this circuit:</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Click on the H gate (Hadamard) to put qubit 1 in superposition</li>
          <li>Click on the X gate (CNOT) for qubit entanglement</li>
          <li>Click "Simulate" to see probability amplitudes</li>
          <li>Observe how different gate configurations affect the final state</li>
        </ol>
      </div>
    </div>
  );
}

export default App;
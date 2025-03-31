# ReactQbit 🔬⚛️

**ReactQbit** is a revolutionary React library that allows you to create and visualize quantum circuits directly with JSX! Impress your colleagues with quantum-ready code.

## Installation

```bash
npm install reactqbit
# or
yarn add reactqbit
```

## Features

- 🔄 Create quantum circuits with JSX components
- ⚡ Visual simulation of quantum operations
- 🧮 Quantum gates: Hadamard, Pauli-X/Y/Z, CNOT, etc.
- 🌐 Real-time qubit state visualization
- 🎨 Ready-to-use Tailwind styles

## Quick Example

```jsx
import { QuantumCircuit, Qubit, QuantumGate, QuantumWire } from 'reactqbit';

function QuantumTeleportation() {
  return (
    <QuantumCircuit qubits={3}>
      {/* Source qubit with Hadamard gate */}
      <div className="flex items-center gap-4">
        <Qubit id="q1" value="0" />
        <QuantumWire qubitId="q1" />
        <QuantumGate type="H" targets={["q1"]} />
        <QuantumWire qubitId="q1" />
      </div>
      
      {/* Entangled qubit */}
      <div className="flex items-center gap-4">
        <Qubit id="q2" value="0" />
        <QuantumWire qubitId="q2" />
        <QuantumGate type="CNOT" targets={["q2"]} controls={["q1"]} />
        <QuantumWire qubitId="q2" />
      </div>
      
      {/* Target qubit */}
      <div className="flex items-center gap-4">
        <Qubit id="q3" value="0" />
        <QuantumWire qubitId="q3" />
      </div>
    </QuantumCircuit>
  );
}
```

## Main Components

### `<QuantumCircuit>`
Main container for your quantum circuit.

```jsx
<QuantumCircuit qubits={2}>
  {/* Your qubits and gates here */}
</QuantumCircuit>
```

### `<Qubit>`
Represents an individual qubit in your circuit.

```jsx
<Qubit id="q1" value="0" />  // |0⟩ ground state
<Qubit id="q2" value="1" />  // |1⟩ excited state
<Qubit id="q3" value="+" />  // Superposition state
```

### `<QuantumGate>`
Applies a quantum operation on one or more qubits.

```jsx
// Hadamard gate on qubit q1
<QuantumGate type="H" targets={["q1"]} />

// CNOT gate with q1 as control and q2 as target
<QuantumGate type="CNOT" targets={["q2"]} controls={["q1"]} />
```

### `<QuantumWire>`
Connects qubits and gates in your circuit.

```jsx
<QuantumWire qubitId="q1" />
```

## Utility Functions

```jsx
// Calculate theoretical quantum state after applying gates
import { calculateQuantumState } from 'reactqbit';

const initialState = ['0', '0'];
const gates = ['H', 'CNOT'];
const result = calculateQuantumState(gates, initialState);
```

## Possible Applications

- Teaching quantum concepts
- Visualizing quantum algorithms
- Interactive demonstrations
- Integration into educational applications
- Rapid prototyping of quantum circuits

## License

MIT
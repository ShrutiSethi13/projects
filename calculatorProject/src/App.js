import React from 'react';
import './App.css';
import NumberProvider from "./Calculator/Numberprovider";
import Calculator from "./Calculator/Calculator";

function App() {
  return (
    <NumberProvider>
      <Calculator/>
    </NumberProvider>
  );
}

export default App;

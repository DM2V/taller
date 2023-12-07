// src/App.js
import React from 'react';
import ClienteList from './components/ClienteList';
import ClienteForm from './components/ClienteForm';
import ReportFilterByAge from './components/ReportFilterByAge';

function App() {
  return (
    <div className="App">
      <h1>Practica de Patrones</h1>
      <ClienteList />
      <ClienteForm />
      <br/><br/>
      <ReportFilterByAge />
    </div>
  );
}

export default App;

import React from 'react';
import Home from './pages/Home';

function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
    <header className="bg-teal-600 text-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Taken-gotchi</div>
        <img src="/assets/tamegotchi.png" alt="Taken-gotchi" className="h-10 w-auto" />
      </div>
    </header>

    <main className="flex-grow bg-white p-4">
      <div className="max-w-7xl mx-auto">
        <Home />
      </div>
    </main>

    <footer className="bg-teal-600 text-white py-4 mt-auto">
      <div className="text-center text-sm">
        &copy; Anissa Miloudi - April 2025
      </div>
    </footer>
  </div>
  );
}

export default App;

import React from 'react';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-800">
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <UserProfile />
          <Skills />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
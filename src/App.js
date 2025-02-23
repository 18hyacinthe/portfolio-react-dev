import React from 'react';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-800">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <UserProfile />
          <div className="mt-16">
            <Skills />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';

function Header() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(0);
      setTimeout(() => {
        setShowWelcome(false);
        setOpacity(1);
      }, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="w-full bg-gradient-to-r from-gray-900 to-purple-800 text-white py-4 fixed top-0 z-10 shadow-lg">
      <div className="container mx-auto px-4 text-center">
        <h1 
          className="text-3xl font-bold font-poppins transition-opacity duration-500"
          style={{ opacity }}
        >
          {showWelcome ? (
            <span className="text-neon-purple animate-pulse">Bienvenue !</span>
          ) : (
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
              Mon Portfolio !
            </span>
          )}
        </h1>
      </div>
    </header>
  );
}

export default Header;
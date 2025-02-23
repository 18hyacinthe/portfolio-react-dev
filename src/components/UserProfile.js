import React from 'react';

function UserProfile() {
  return (
    <div className="flex flex-col items-center mt-20 sm:mt-24 px-2 sm:px-4">
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-75 group-hover:opacity-100 transition duration-300 blur"></div>
        <img
          src="https://avatars.githubusercontent.com/u/12345678"
          alt="Jean Doe"
          className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-purple-500 hover:scale-110 transition-transform duration-300 object-cover"
        />
      </div>
      <h2 className="text-xl sm:text-2xl font-semibold text-white mt-3 sm:mt-4 text-center px-2">AGBEDJINOU Kossivi Hyacinthe</h2>
      <a 
        href="kagbedjinou@yahoo.com"
        className="text-base sm:text-lg text-purple-400 hover:underline hover:text-purple-300 transition-colors duration-300"
      >
        kagbedjinou@yahoo.com
      </a>
      <p className="text-sm sm:text-base text-gray-300 mt-2 max-w-lg text-center px-4 sm:text-lg md:max-w-2xl">
        Développeur créatif et passionné par le code
      </p>
    </div>
  );
}

export default UserProfile;
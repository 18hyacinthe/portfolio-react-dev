import React from 'react';

function UserProfile() {
  return (
    <div className="flex flex-col items-center mt-8 px-4">
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-75 group-hover:opacity-100 transition duration-300 blur"></div>
        <img
          src="https://avatars.githubusercontent.com/u/12345678"
          alt="Jean Doe"
          className="relative w-32 h-32 rounded-full border-2 border-purple-500 hover:scale-110 transition-transform duration-300 object-cover"
        />
      </div>
      <h2 className="text-2xl font-semibold text-white mt-4">AGBEDJINOU Kossivi Hyacinthe</h2>
      <a 
        href="mailto:jean.doe@example.com"
        className="text-lg text-purple-400 hover:underline hover:text-purple-300 transition-colors duration-300"
      >
        kagbedjinou@yahoo.com
      </a>
      <p className="text-base text-gray-300 mt-2 max-w-lg text-center sm:text-lg md:max-w-2xl">
        Développeur créatif et passionné par le code
      </p>
    </div>
  );
}

export default UserProfile;
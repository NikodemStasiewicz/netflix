import React from 'react';

const HomePage = () => {
  const handleSignInClick = () => {
    window.location.href = '/login'; 
  };

  return (
    <div className="relative" style={{
        backgroundImage: `url('https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}>
      <div className="flex justify-between items-center p-4">
        <div></div> 
        <button
          className="absolute top-4 right-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSignInClick}
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default HomePage;
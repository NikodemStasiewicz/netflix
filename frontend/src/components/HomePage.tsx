

// const HomePage = () => {
//   const handleSignInClick = () => {
//     window.location.href = '/login'; 
//   };

//   return (
//     <div className="relative  " style={{
//       position: 'relative',
//       minHeight: '100vh',
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundImage: `url('https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg')`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       overflowY: 'auto',
//     }}>
//       <div className="absolute inset-0 bg-black opacity-50"></div> 
//       <button
//         className="absolute top-4 right-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//         onClick={handleSignInClick}
//       >
//         Sign in
//       </button>
//       <div className="text-center text-white z-10 relative">
//         <h1 className='font-bold text-5xl'>Unlimited movies, TV shows, and more</h1>
//         <p className='py-5 text-2xl'>Watch anywhere. Cancel anytime</p>
//         <p className='text-2xl'>Ready to watch? Enter your email to create or restart your membership.</p>
//         <div className='relative inline-flex items-center'>
//           <input 
//             type="text" 
//             id="enter_email" 
//             className="text-white block opacity-50 rounded-none px-2.5 pb-2.5 pt-4 w-80 text-sm text-gray-900 bg-black dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
//             placeholder=" " 
//           />
//           <label 
//             htmlFor="enter_email" 
//             className="absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
//           >
//            Enter Email
//           </label> 
//           <button className='bg-red-500 hover:bg-red-700 text-white font-bold px-2.5 pb-2.5 pt-4 rounded'>Get started</button>
//         </div>
//       </div>

//       <div className="flex flex-col md:flex-col lg:items-center lg:justify-between">
//         <h1 className="mt-2 text-gray-500 dark:text-gray-400 lg:max-w-xl description-link">Enjoy on your TV</h1>
//         <h2 className="text-xl">Another Heading</h2>
//       </div>
      
//     </div>
    
//   );
// };

// export default HomePage;

import React from 'react';
import download from "C:/Users/NikodemStasiewiczFSS/Desktop/netflix/frontend/src/assets/images/download.gif";


const HomePage: React.FC = () => {
  const handleSignInClick = () => {
         window.location.href = '/login'; 
       };
  return (
    <div className="app" style={{
      backgroundImage: `url('https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg')`
    }}>
      {/* Nagłówek */}
      <header className="app__header ">
        
        <button
         className=" z-50 absolute top-4 right-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
         onClick={handleSignInClick}
       >
   Sign in
     </button>
      </header>

      {/* Treść główna */}
      <div className="text-center text-white z-8 relative ">
      <h2 className='font-bold text-4xl'>Unlimited movies, TV shows, and more</h2>
         <p className='py-5 text-2xl'>Watch anywhere. Cancel anytime</p>
         <p className='text-2xl'>Ready to watch? Enter your email to create or restart your membership.</p>
        <p className="text-white">Zacznij oglądać w dowolnym momencie. Wszystko za jedną niską cenę miesięczną, bez żadnych dodatkowych opłat.</p>
        <div className='relative inline-flex items-center'>
          <input 
            type="text" 
            id="enter_email" 
            className="text-white block opacity-50 rounded-none px-2.5 pb-2.5 pt-4 w-80 text-sm text-gray-900 bg-black dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" " 
          />
          <label 
            htmlFor="enter_email" 
            className="absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
           Enter Email
          </label> 
          <button className='bg-red-500 hover:bg-red-700 text-white font-bold px-2.5 pb-2.5 pt-4 rounded'>Get started</button>
          </div>
          <img src={('C:/Users/NikodemStasiewiczFSS/Desktop/netflix/frontend/src/assets/download-icon.gif')} />
      </div>
      <img src={download} alt='logo' ></img>
      {/* Stopka */}
      <footer className="app__footer p-4">
        <p>Zaprojektowane przez Twoje Imię i Nazwisko</p>
      </footer>
    </div>
  );
};

export default HomePage;

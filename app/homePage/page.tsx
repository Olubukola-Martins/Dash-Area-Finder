'use client'

import React, { useEffect, useState } from 'react'
import Hero from '../components/hero/Hero'
import NavBar from '../components/nav/NavBar';
import ReactDOM from 'react-dom';

const HomePage = () => {
     const [isClient, setIsClient] = useState(false);

     useEffect(() => {
       setIsClient(true);
     }, []);

     if (!isClient) {
       return null; // Render nothing on the server-side
     }

  return (
    <>
      {ReactDOM.createPortal(
        <div className=" h-svh flex flex-col overflow-y-hidden w-[86.11%] mx-auto">
          <NavBar />
          <Hero />
        </div>,
        document.body
      )}
    </>
  );
}

export default HomePage 
import React from 'react';
import Link from 'next/link';
import code from '/assests/code.png'

export default function WelcomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen" style={{ backgroundImage: "url('https://st3.depositphotos.com/22536472/32045/v/600/depositphotos_320450228-stock-video-binary-code-dark-blue-background.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} >
      <h1 className="text-7xl font-bold mb-4 text-white"> Welcome to <span className='text-purple-900'>MPCODE</span> </h1> 
      <h6 className='text-white font-sans text-4xl py-3'>The NewGen Code-Editor and IDE</h6>
      <p className="text-lg text-white py-4">
       Best powered by ChatGPT.
      </p>
      <Link className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition-transform duration-300 transform hover:scale-150" href="/code">
          Get Started
      </Link>
    </div>
  );
}


import React from 'react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <span className="text-white font-bold text-lg"><img className='w-10 h-19' src='https://t3.ftcdn.net/jpg/03/43/41/14/360_F_343411464_rxfe1t4qKXrIPLkgzweTzR2bASeUNPb5.jpg'></img></span>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    href="/">
                                    Home

                                </Link>
                                <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    href="/about">
                                    About

                                </Link>
                                <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/contact">
                                    Contact

                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <Link className="bg-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium border border-black" href="/code">
                            Get Started
                        </Link>
                    </div>
                </div> 
            </div>
        </nav>
    );
}

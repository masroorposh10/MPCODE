import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-2">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-300 text-sm">
          &copy; {new Date().getFullYear()} MasroorPosh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

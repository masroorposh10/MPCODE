import Footer from '@/components/Footer'
import Navbar from '/components/Navbar'
import React from 'react'

export default function page() {
  return (
    <>
        <Navbar/>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md px-4 py-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input className="border border-gray-300 rounded-lg px-3 py-2 w-full" type="text" id="name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="border border-gray-300 rounded-lg px-3 py-2 w-full" type="email" id="email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea className="border border-gray-300 rounded-lg px-3 py-2 w-full" id="message" rows="5"></textarea>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
        <Footer/>
        </>
  )
}

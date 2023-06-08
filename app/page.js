"use client"
import Footer from '@/components/Footer'
import Navbar from '/components/NavBar'
import WelcomePage from '@/components/WelcomePage'
// import Component from './Component'



export default function Home() {
  return (
    <div>
      <Navbar/>
      <WelcomePage/>
      <Footer/>
      {/* <Component/> */}
      {/* check for backend get above */}
    </div>
  )
}

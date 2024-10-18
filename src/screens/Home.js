import React from 'react'
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
export default function Home() {
  return (
    <div>
      <div><Navbar /></div>
      <div>
      <Carousel/>
    </div>


    <div>
      <Card/>
    </div>
<div>
  <Footer/>
</div>
    </div>
  )
}

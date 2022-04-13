import React from 'react'
import { Article, Brand, CTA, Feature, Navbar } from './components';
import { Footer, Blog, Possibility, Features, WhatDavid, Header } from './containers';


const App = () => {
  return (
    <div className = "App">
        <div className = "gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatDavid />
        <Feature />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App
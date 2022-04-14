import React from 'react'
import { Article, CTA, Feature, Navbar } from './components';
import { Footer, Blog, Possibility, Features, WhatDavid, Header } from './containers';
import './App.css'


const App = () => {
  return (
    <div className = "App">
        <div className = "gradient__bg">
          <Navbar />
          <Header />
        </div>
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
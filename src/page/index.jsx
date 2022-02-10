import React from 'react'
import Blogs from '../section/Blogs.jsx';
import Categories from '../section/Categories.jsx';
import Features from '../section/Features.jsx';
import Header from '../section/Header.jsx';
import Home from '../section/Home.jsx';
import Products from '../section/Products.jsx';
import Review from '../section/Review.jsx';
import Footer from '../section/Footer.jsx';
import './style.css';
const Index = () => {
  return (
    <div>
        <Header/>
        <Home/>
        <Features/>
        <Products/>
        <Categories/>
        <Review/>
        <Blogs/>
        <Footer/>
    </div>
  )
}

export default Index;
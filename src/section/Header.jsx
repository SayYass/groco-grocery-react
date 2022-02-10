import React from 'react'
const Header = () => {
    
const handleSearch = () => {
    let navbar = document.querySelector('.navbar');
    let searchForm = document.querySelector('.search-form');
    let cartForm= document.querySelector('.shopping-cart');
    let loginForm = document.querySelector('.login-form');
    if(cartForm.classList.contains('active') || loginForm.classList.contains('active') || navbar.classList.contains('active')){
        cartForm.classList.remove('active');
        loginForm.classList.remove('active');
        navbar.classList.remove('active');
        searchForm.classList.toggle('active');
    } else {
        searchForm.classList.toggle('active');
    }
    
}

const handleCart = () => { 
    let navbar = document.querySelector('.navbar');
    let searchForm = document.querySelector('.search-form');
    let cartForm= document.querySelector('.shopping-cart');
    let loginForm = document.querySelector('.login-form');
    if(searchForm.classList.contains('active') || loginForm.classList.contains('active') || navbar.classList.contains('active')){
        searchForm.classList.remove('active');
        navbar.classList.remove('active');
        loginForm.classList.remove('active');
        cartForm.classList.toggle('active');
    } else {
        cartForm.classList.toggle('active');
    }
}




const handleLogin = () => { 
    let navbar = document.querySelector('.navbar');
    let searchForm = document.querySelector('.search-form');
    let cartForm= document.querySelector('.shopping-cart');
    let loginForm = document.querySelector('.login-form');
    if(cartForm.classList.contains('active') || searchForm.classList.contains('active') || navbar.classList.contains('active')){
        cartForm.classList.remove('active');
        searchForm.classList.remove('active');
        navbar.classList.remove('active');
        loginForm.classList.toggle('active');
    } else {
        loginForm.classList.toggle('active');
    }
}



const handleNavbar = () => {
    let navbar = document.querySelector('.navbar');
    let searchForm = document.querySelector('.search-form');
    let cartForm= document.querySelector('.shopping-cart');
    let loginForm = document.querySelector('.login-form');
   if(cartForm.classList.contains('active') || loginForm.classList.contains('active') || searchForm.classList.contains('active')){
        cartForm.classList.remove('active');
        searchForm.classList.remove('active');
        loginForm.classList.remove('active');
        navbar.classList.toggle('active');
    } else {
        navbar.classList.toggle('active');
    }
}

window.onscroll = () =>{
    let navbar = document.querySelector('.navbar');
    let searchForm = document.querySelector('.search-form');
    let cartForm= document.querySelector('.shopping-cart');
    let loginForm = document.querySelector('.login-form');
    cartForm.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
  return (
    <header className="header">
    <a href="#" className="logo"> <i className="fas fa-shopping-basket">  </i> Groco </a>
    <nav className="navbar">
        <a href="#home">home</a>
        <a href="#features">Features</a>
        <a href="#products">Products</a>
        <a href="#categories">Categories</a>
        <a href="#review">Review</a>
        <a href="#blogs">Blogs</a>
    </nav>

    <div className="icons">
        <div className="fas fa-bars" id="menu-btn" onClick={handleNavbar}></div>
        <div className="fas fa-search" id="search-btn" onClick={handleSearch}></div>
        <div className="fas fa-shopping-cart" id="cart-btn" onClick={handleCart}></div>
        <div className="fas fa-user" id="login-btn" onClick={handleLogin}></div>
    </div>
    
    <form action="" className="search-form" id="search-form">
        <input type="search" id="search-box" placeholder="search here..." />
        <label htmlFor="search-box" className="fas fa-search"></label>
    </form>

    <div className="shopping-cart">
        <div className="box">
            <i className="fas fa-trash"></i>
            <img src={require('../image/cart-img-1.png')} alt="" />
            <div className="content">
                <h3>watermelon</h3>
                <span className="price"> Rp. 40000 </span>
                <span className="quantity">qty : 1</span>
            </div>
        </div>

        <div className="box">
            <i className="fas fa-trash"></i>
            <img src={require('../image/cart-img-2.png')} alt="" />
            <div className="content">
                <h3>onion</h3>
                <span className="price"> Rp. 23000 </span>
                <span className="quantity">qty : 1</span>
            </div>
        </div>
        <div className="box">
            <i className="fas fa-trash"></i>
            <img src={require('../image/cart-img-3.png')} alt="" />
            <div className="content">
                <h3>chicken</h3>
                <span className="price"> Rp. 15000 </span>
                <span className="quantity">qty : 1</span>
            </div>
        </div>
        <div className="total">total : Rp. 58000 </div>
        <a href="" className="btn">check</a>
    </div>

    <form className="login-form">
        <h3>Login Now</h3>
        <input type="email" placeholder="your email" className="box" />
        <input type="password" placeholder="your password" className="box"/>
        <p>Forgot Password ? <span>Click Here</span> </p>
        <p>Did'nt Have Account ? <span>Register Here</span></p>
        <input type="submit" value="login now" className="btn" />

    </form>

     
</header>
   
)
 
  
  
  
}

export default Header
import React from 'react'

const Footer = () => {
  return (
    <section className="footer">
    <div className="box-container">

        <div className="box">
            <h3>groco <i className="fas fa-shopping-basket"></i></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, amet porro maiores quasi facilis consectetur.</p>
            <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="#" className="fab fa-linkedin"></a>
            </div>

        </div>

        <div className="box">
            <h3> contact info</h3>
           <a href="#" className="links"> <i className="fas fa-phone">  </i> +6289668408656 </a>
           <a href="#" className="links"> <i className="fas fa-envelope">  </i> ilyasdewanto@gmail.com </a>
           <a href="#" className="links"> <i className="fas fa-map-marker-alt">  </i> Solo, Jawa Tengah - Indonesia </a>
        </div>

        <div className="box">
            <h3> quick link</h3>
           <a href="#" className="links"> <i className="fas fa-arrow-right">  </i> home </a>
           <a href="#" className="links"> <i className="fas fa-arrow-right">  </i> features </a>
           <a href="#" className="links"> <i className="fas fa-arrow-right">  </i> products </a>
           <a href="#" className="links"> <i className="fas fa-arrow-right">  </i> categories </a>
           <a href="#" className="links"> <i className="fas fa-arrow-right">  </i> review </a>
           <a href="#" className="links"> <i className="fas fa-arrow-right">  </i> blogs </a>
          
        </div>

        <div className="box">
            <h3> newsletter</h3>
          <p>subscribe for latest updates</p>
          <input type="email" placeholder="your email" className="email" />
          <input type="submit" value="subscribe" className="btn" />
          <img src={require('../image/payment.png')} className="payment-img" alt="" />
           
          
        </div>
    </div>
</section>
  )
}

export default Footer
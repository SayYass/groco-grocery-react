import React, { useEffect } from 'react'
import Swiper from 'swiper';

const Review = () => {
  useEffect(() => {
    const swiper = new Swiper(".review-slider", {
      loop:true,
      spaceBetween: 20,
      centerSlider:true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }, [])
  return (
    <section className="review" id="review">
    <h1 className="heading">customer's <span>review</span> </h1>

    <div className="swiper review-slider">
        <div className="swiper-wrapper">
            
            <div className="swiper-slide box">
                <img src={require('../image/pic-1.png')} alt="" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde vero, minus id placeat repudiandae ut?</p>
                <h3>john doe</h3>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
            </div>
    
            <div className="swiper-slide box">
                <img src={require('../image/pic-2.png')} alt="" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde vero, minus id placeat repudiandae ut?</p>
                <h3>maria</h3>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
            </div>
    
            <div className="swiper-slide box">
                <img src={require('../image/pic-3.png')} alt="" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde vero, minus id placeat repudiandae ut?</p>
                <h3>steven</h3>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
            </div>
    
            <div className="swiper-slide box">
                <img src={require('../image/pic-4.png')} alt="" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde vero, minus id placeat repudiandae ut?</p>
                <h3>jane doe</h3>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
            </div>
        </div>

    </div>
</section>
  )
}

export default Review
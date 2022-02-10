import React, { useEffect } from 'react'
import Swiper from 'swiper';
const Products = () => {
    useEffect(() => {
        const swiper = new Swiper(".product-slider", {
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
    <section className="products" id="products">
    <h1 className="heading">our <span>products</span> </h1>

    <div className="swiper product-slider">
        <div className="swiper-wrapper">
            <div className="swiper-slide box">
                <img src={require('../image/product-1.png')} alt="" />
                <h3>fresh orange</h3>
                <div className="price"> Rp. 15000</div>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <a href="" className="btn">add to cart</a>

            </div>

            <div className="swiper-slide box">
                <img src={require('../image/product-2.png')} alt="" />
                <h3>fresh onion</h3>
                <div className="price"> Rp. 15000</div>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <a href="" className="btn">add to cart</a>

            </div>


            <div className="swiper-slide box">
                <img src={require('../image/product-3.png')} alt="" />
                <h3>fresh meat</h3>
                <div className="price"> Rp. 15000</div>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <a href="" className="btn">add to cart</a>

            </div>

            <div className="swiper-slide box">
                <img src={require('../image/product-4.png')} alt="" />
                <h3>fresh cabbage</h3>
                <div className="price"> Rp. 15000</div>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <a href="" className="btn">add to cart</a>

            </div>
        </div>

    </div>

    <div className="swiper product-slider">
        <div className="swiper-wrapper">
            <div className="swiper-slide box">
                <img src={require('../image/product-5.png')} alt="" />
                <h3>fresh potato</h3>
                <div className="price"> Rp. 15000</div>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <a href="" className="btn">add to cart</a>

            </div>

            <div className="swiper-slide box">
                <img src={require('../image/product-6.png')} alt="" />
                <h3>fresh avocado</h3>
                <div className="price"> Rp. 15000</div>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <a href="" className="btn">add to cart</a>

            </div>


            <div className="swiper-slide box">
                <img src={require('../image/product-7.png')} alt="" />
                <h3>fresh carrot</h3>
                <div className="price"> Rp. 15000</div>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <a href="" className="btn">add to cart</a>

            </div>

            <div className="swiper-slide box">
                <img src={require('../image/product-8.png')} alt="" />
                <h3>green lemon</h3>
                <div className="price"> Rp. 15000</div>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <a href="" className="btn">add to cart</a>

            </div>
        </div>

    </div>
</section>
  )
}

export default Products
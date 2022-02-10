import React from 'react'

const Categories = () => {

  return (
    <section className="categories" id="categories">
    <h1 className="heading">product <span>categories</span></h1>

    <div className="box-container">

        <div className="box">
            <img src={require('../image/cat-1.png')} alt="" />
            <h3>vegetables</h3>
            <p>up to 45% off</p>
            <a href="" className="btn">shop now</a>
        </div>

        <div className="box">
            <img src={require('../image/cat-2.png')} alt="" />
            <h3>fresh fruits</h3>
            <p>up to 35% off</p>
            <a href="" className="btn">shop now</a>
        </div>

        <div className="box">
            <img src={require('../image/cat-3.png')} alt="" />
            <h3>dairy products</h3>
            <p>up to 45% off</p>
            <a href="" className="btn">shop now</a>
        </div>

        <div className="box">
            <img src={require('../image/cat-4.png')} alt="" />
            <h3>fresh meat</h3>
            <p>up to 45% off</p>
            <a href="" className="btn">shop noew</a>
        </div>
    </div>
</section>
  )
}

export default Categories
import React from 'react'

const Blogs = () => {
  return (
    <section className="blogs" id="blogs">
    <h1 className="heading">our <span>blog</span></h1>

    <div className="box-container">

        <div className="box">
            <img src={require('../image/blog-1.jpg')} alt="" />
            <div className="content">
                <div className="icons">
                    <a href=""> <i className="fas fa-user"> </i> by user </a>
                    <a href=""> <i className="fas fa-calendar"></i> 10 feb, 2022 </a>
                </div>
    
                <h3>fresh and organic vegetables and fruits</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, iure.</p>
                <a href="" className="btn">read more</a>
            </div>
        </div>

        <div className="box">
            <img src={require('../image/blog-2.jpg')} alt="" />
            <div className="content">
                <div className="icons">
                    <a href=""> <i className="fas fa-user">  </i> by user </a>
                    <a href=""> <i className="fas fa-calendar">  </i> 10 feb, 2022 </a>
                </div>
    
                <h3>fresh and organic vegetables and fruits</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, iure.</p>
                <a href="" className="btn">read more</a>
            </div>
        </div>

        <div className="box">
            <img src={require('../image/blog-3.jpg')} alt="" />
            <div className="content">
                <div className="icons">
                    <a href=""> <i className="fas fa-user"> </i> by user</a>
                    <a href=""> <i className="fas fa-calendar"></i>10 feb, 2022 </a>
                </div>
    
                <h3>fresh and organic vegetables and fruits</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, iure.</p>
                <a href="" className="btn">read more</a>
            </div>
        </div>
    </div>
</section>
  )
}

export default Blogs
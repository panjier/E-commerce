import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/hero'
import FeaturedProducts from '../components/featuredProducts'
import NewArrival from '../components/newArrival'
import img1 from '../assets/images/banner/b17.jpg'
import img2 from '../assets/images/banner/b10.jpg'

const home = () => {
  return <>
    <section className='banner mb-3'>
      <div className="container-xxl">
        <div className="row">
          <div className="banner-details p-5 d-flex flex-column justify-content-center align-items-start">
            <span className='shadow-lg p-2 mt-2'>Trade in offer!</span>
            <h1>Super Value Deals</h1>
            <h2>On All Product</h2>
            <p className='save-more mb-5 mt-2'>Save More With Apneck</p>
            <Link className='button-link mb-3'>Shop Now</Link>
          </div>
        </div>
      </div>
    </section>

    <Hero />

    <section className="featured-product p-5">
      <div className="container-xxl">
        <div className="row">
          <div className="text-center">
            <h1>Feature Product</h1>
            <p>All Weather Modern Design</p>
          </div>
          <FeaturedProducts /> 
        </div>
      </div>
    </section>

    <section className="repair">
      <div className="container-xxl">
        <div className="row">
          <div className="repair-details text-center d-flex flex-column align-items-center p-3">
            <span className='text-white'>Repair Service</span>
            <h2 className='text-white mt-2'>On <span className='diskon p-1'>70%</span> Off On All Product And Accessories</h2>
            <div className='main-button mt-3'>
              <button className='button-repair'>Explore Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="new-product p-5">
    <div className="container-xxl">
      <div className="row">
        <div className="text-center">
          <h1>New Arrivals</h1>
          <p>Your Best Designer Outfit</p>
        </div>
        <NewArrival /> 
      </div>
    </div>
    </section>

    <section className='deals p-5'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-6 p-4">
            <div className="card row">
              <div className="d-flex">
              <div className="col-md-4">
                <img src={img1} alt="" className='img-fluid rounded-start p-3 h-100' />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <span>Hot Deals</span>
                  <h3 className='card-tittle'>Buy One Get One Free</h3>
                  <p>The latest best collection in our closet feel cute with our outfits</p>
                  <button className="button-deals mt-3">
                    Learn More
                  </button>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className="col-6 p-4">
            <div className="card row">
             <div className="d-flex">
             <div className="col-md-4">
                <img src={img2} alt="" className='img-fluid rounded-start p-3 h-100' />
              </div>
              <div className="col-md-8">
              <div className="card-body">
                  <span>Hot Deals</span>
                  <h3 className='card-tittle'>Buy One Get One Free</h3>
                  <p>The latest best collection in our closet feel cute with our outfits</p>
                  <button className="button-deals mt-3">
                    Learn More
                  </button>
                </div>
              </div>
             </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default home
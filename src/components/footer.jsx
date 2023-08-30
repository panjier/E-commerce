import React from "react";
import { Link } from "react-router-dom";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import google from "../assets/images/pay/play.jpg";
import app from "../assets/images/pay/app.jpg";
import pay from "../assets/images/pay/pay.png";

const footer = () => {
  return (
    <>
      <footer className='footer p-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12 d-flex'>
              <div className='col-8 text-center mb-3'>
                <h3>Sign Up for News latter</h3>
                <p>
                  To get update on all <Link>Spesial Offer</Link>
                </p>
              </div>
              <div className='col-4'>
                <div className='input-group mb-3'>
                  <input
                    type='text'
                    className='form-control p-2'
                    placeholder='Enter email here'
                    aria-label="Recipient's username"
                    aria-describedby='basic-addon2'
                  />
                  <button className='input-group-text' id='basic-addon2'>
                    <CiMail />
                  </button>
                </div>
              </div>
            </div>
            <hr className='m-2' />
            <div className='col-4 flex flex-column'>
              <h3 className='title mb-4'>Contact Us</h3>
              <div className='footer-detail'>
                <p className='mb-3'>
                  <b>Address:</b> Panji erlangga, Srumbung, Magelang
                </p>
                <p className='mb-3'>
                  <b>Phone:</b>{" "}
                  <a href='tel:+6289673761949'> call us +6289673761949 </a>
                </p>
                <p className='mb-5'>
                  <b>Hourse Open:</b> From 8 Am to 5 pm{" "}
                </p>
                <p className='mb-3'>
                  <b>Follow Us</b>
                </p>
                <div className='social-icons mb-3 col-4 d-flex justify-content-around'>
                  <Link>
                    <BiLogoTwitter className='fs-5' />
                  </Link>
                  <Link>
                    <BiLogoFacebookCircle className='fs-5' />
                  </Link>
                  <Link>
                    <BiLogoInstagramAlt className='fs-5' />
                  </Link>
                  <Link>
                    <AiFillGithub className='fs-5' />
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-2'>
              <h3 className='title mb-4'>About</h3>
              <div className='footer-detail d-flex flex-column'>
                <Link className='mb-3'>About Us</Link>
                <Link className='mb-3'>Delivery</Link>
                <Link className='mb-3'>Privacy Police</Link>
                <Link className='mb-3'>Fee Police</Link>
                <Link className='mb-3'>Terms & Conditions</Link>
              </div>
            </div>
            <div className='col-2'>
              <h3 className=' title mb-4'>Account</h3>
              <div className='footer-detail d-flex flex-column'>
                <Link className='mb-3'>Profile</Link>
                <Link className='mb-3'>View Cart</Link>
                <Link className='mb-3'>Help</Link>
                <Link className='mb-3'>My Orders</Link>
                <Link className='mb-3'>My Wishlist</Link>
                <Link className='mb-3'>Coupons</Link>
              </div>
            </div>
            <div className='col-4'>
              <h3 className='title mb-3'>Install App</h3>
              <div className='footer-details'>
                <p>Available On Google Play Services & App Store</p>
                <div className='pay d-flex'>
                  <Link>
                    <img src={google} alt='' className='img-fluid p-3' />
                  </Link>
                  <Link>
                    <img src={app} alt='' className='img-fluid p-3' />
                  </Link>
                </div>
                <p className='mb-3'>Payment Method</p>
                <Link className='pay'>
                  <img src={pay} alt='' className='img-fluid p-3' />
                </Link>
              </div>
            </div>
          </div>
          <hr />
          <div className='row d-flex justify-content-between'>
            <div className='dev col-3'>
              <p>&copy; Developer by Panji Erlangga 2023</p>
            </div>
            <div className='col-3 d-flex justify-content-around'>
              <Link className='text-black'>Privacy Police</Link>
              <Link className='text-black'>Terms of</Link>
              <Link className='text-black'>Contact Me</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default footer;

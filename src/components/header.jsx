import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/apneck.png";
import { BiSolidHeart } from "react-icons/bi";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoMdCart } from "react-icons/io";
import { FiSearch } from "react-icons/fi";

const header = () => {
  const location = useLocation();

  return (
    <>
      <header className="header-top-strip p-1 px-4 shadow-md">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="title col-6">
              <span className="title-word title-word-1">The Tranding </span>
              <span className="title-word title-word-2">Outfit At </span>
              <span className="title-word title-word-3">100% Of</span>
            </div>
            <div className="col-6 d-flex justify-content-between">
              <div>
                <a href="tel:+6289673761949"> call us +6289673761949 </a>
              </div>
              <div>
                <Link>
                  <BiSolidPhoneCall className="fs-5 mx-4" />
                </Link>
                <Link>
                  <HiOutlineMail className="fs-5 mx-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper px-3">
        <div className="container-xxl"></div>
        <div className="row">
          <div className="col-2 m-auto text-center">
            <Link to="/">
              <img src={logo} alt="" className="img-fluid logo" />
            </Link>
          </div>
          <div className="col-3 d-flex align-items-center mt-3">
            <div className="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                All
              </span>
              <input
                type="text"
                className="form-control p-2"
                placeholder="Search Product"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <button className="input-group-text" id="basic-addon2">
                <FiSearch />
              </button>
            </div>
          </div>
          <div className="nav-links col-4 d-flex justify-content-between align-items-center text-center m-auto">
            <Link
              to={"/"}
              className={location.pathname === "/" ? "active" : "inactive"}
            >
              Home
            </Link>
            <Link
              to={"shop"}
              className={location.pathname === "/shop" ? "active" : "inactive"}
            >
              Shop
            </Link>
            <Link
              to={"blog"}
              className={location.pathname === "/blog" ? "active" : "inactive"}
            >
              Blog
            </Link>
            <Link
              to={"about"}
              className={location.pathname === "/about" ? "active" : "inactive"}
            >
              About
            </Link>
            <Link
              to={"contact"}
              className={
                location.pathname === "/contact" ? "active" : "inactive"
              }
            >
              Contact
            </Link>
          </div>
          <div className="nav-links-nav col-3 d-flex align-items-center justify-content-around">
            <Link
              to={"wishlist"}
              className={
                location.pathname === "/wishlist" ? "active" : "inactive"
              }
            >
              <div className="d-flex m-2">
                <span>
                  <BiSolidHeart className="fs-5 mx-2" />
                </span>
              </div>
            </Link>
            <Link
              to={"login"}
              className={location.pathname === "/login" ? "active" : "inactive"}
            >
              <div className="d-flex m-2 ">
                <span>
                  <RiAccountCircleFill className="fs-5 mx-2" />
                </span>
              </div>
            </Link>
            <Link
              to={"cart"}
              className={location.pathname === "/cart" ? "active" : "inactive"}
            >
              <div className="d-flex m-2">
                <span>
                  <IoMdCart className="fs-5 mx-2" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default header;

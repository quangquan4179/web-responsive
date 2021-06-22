import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch,faShoppingCart} from '@fortawesome/free-solid-svg-icons'
function Navbar() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <div className="header-top-left">
                <ul className="phone-wrapper">
                  <li><span>Telephone Enquiry:</span><Link to ="#">(+123) 123 321 345</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9 col-md-8">
              <div className="header-top-right">
                <ul className="ht-menu d-flex">
                  <li>
                    {/* <!-- Example single danger button --> */}
                      <div className="btn-group my-1">
                        <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                          Setting
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark">
                          <li><Link className="dropdown-item" to="/login">Login</Link></li>
                          <li><Link className="dropdown-item" to="/register">Register</Link></li>
                          <li><Link className="dropdown-divider"/></li>
                          <li><Link className="dropdown-item" to="/checkout">Checkout</Link></li>
                        </ul>
                      </div>
                  </li>
                  <li>
                    <span className="language-selector-wrapper" >Language:</span>
                    <div className="btn-group">
                        <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                          English
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark">
                          <li><Link className="dropdown-item" to="#">Another action</Link></li>
                          <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                          <li><Link className="dropdown-divider"/></li>
                          <li><Link className="dropdown-item" to="#">Separated link</Link></li>
                        </ul>
                      </div>
                  </li>
      
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* header middle */}
      <div className="header-middle px-sm-0">
        <div className="container">
          <div className="row ">
            <div className="col-lg-3">
              
              <div className="logo py-5">
                <Link to="/">
                  <img src="assets/images/menu/logo/1.jpg" alt=""/>
                </Link>
              </div>

            </div>
            <div className="col-lg-9 ps-0 hm-r-center">
              <form action="#" className="hm-searchbox p-5 d-flex">
                <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  <option selected>ALL</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
                  <button className="btn btn-outline-secondary" type="button" id="button-addon2"><FontAwesomeIcon icon={faSearch}/></button>
                </div>
              </form>
              <div className="header-middle-right">
                <ul className="hm-menu d-flex">
                  <li className="hm-minicart">
                    <div className=" btn-group">
                      
                       <button className="btn btn-danger btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <span className="item-icon">
                        <FontAwesomeIcon icon={faShoppingCart}/>
                      </span>
                      
                      <span className="item-text">£80.00
                        <span className="cart-item-count">2</span>
                      </span>
                       </button>
                      <ul className="dropdown-menu">
                          ...
                      </ul>
                  
                    </div>
                  </li>
                  <li>
                    <nav className="navbar navbar-expand-lg navbar-dark ">
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                       <span className="navbar-toggler-icon"></span>
                      </button>

                    </nav>
                    
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      {/* header-bottom */}
      <div className="header-bottom">
        <nav className="navbar navbar-expand-lg navbar-dark ">
           <div className="container">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/shop">Shop</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog">Blog</Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link" to="/contact">Disabled</Link>
               </li>
              </ul>
            </div>
           </div>
        </nav>
      </div>
    </header>
  
  )
}


export default Navbar


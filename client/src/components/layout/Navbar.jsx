import React,{useState} from 'react'
import{Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faTimes,faSearch,faHeart,faShoppingCart} from '@fortawesome/free-solid-svg-icons'


const Navbar=() =>{
  const togglehandler=()=>{
  let result=document.getElementById('hb-menu');

  if(!isActive){
  result.classList.add('active');
  setIsActive(true);
  }
  else{
    result.classList.remove('active')
    setIsActive(false);
  }
  

}
 const [isActive,setIsActive]=useState(false);

  return (
    <header className="header">
      <div className="header__top">
        <div className="grid wide">
          <div className="row">
            <div className="col l-3 m-4 c-12">
              <div className="header__top-left">
                <ul className="phone-wrap">
                  <li><span>Telephone Enquiry:</span><Link to="#">(+123) 123 321 345</Link></li>
                </ul>
              </div>
            </div>
            <div className="col l-9 m-6 c-12">
                <div className="header__top-right">
                  <ul className="top__menu">
                    <li className="top__menu-item">
                      <label htmlFor="nav-ht-checkbox" className="top_menu-setting"><span>Setting</span></label>
                      <input type="checkbox" className="ht-checkbox" hidden id="nav-ht-checkbox" />
                      <div className="top__menu-setting-dropdown">
                       <ul>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to ="/register">Register</Link></li>
                        <li><Link to="/checkout">Checkout</Link></li>
                       </ul>
                      </div>
                    </li>
                    <li className="top__menu-item">
                      <span className="currency-selector-wrapper">Currency :</span>
                      <div className="ht-currency-trigger"><span>USD $</span></div>
                      <div className="currency ht-currency">
                        <ul className="ht-setting-list">
                          <li><Link to="#">EUR €</Link></li>
                          <li className="active"><Link to="#">USD $</Link></li>
                        </ul>
                      </div>
                    </li>
                    <li className='top__menu-item'>
                      <span className="language-selector-wrapper">Language :</span>
                      <div className="ht-language-trigger"><span>English</span></div>
                      <div className="language ht-language">
                        <ul className="ht-setting-list">
                          <li className="active"><Link to="#"><img src="images/menu/flag-icon/1.jpg" alt=""/>English</Link></li>
                          <li><Link to="#"><img src="images/menu/flag-icon/2.jpg" alt=""/>Français</Link></li>
                        </ul>
                      </div>
                    </li>

                  </ul>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div className="header__middle">
        <div className="grid wide">
          <div className="row">
            <div className=" header__middle-left col l-3 c-12">
              <div className="logo">
                <img src="assets/img/logo.svg" alt="logo" height="60px"/>
              </div>
            </div>
            <div className="col l-9 c-12 header__middle-right ">
              <form action="" className="header__searchbox">
                <select className="select-searchbox ">
                  <option value="0">ALL</option>
                  <option value="10">Laptops</option>                     
                  <option value="17">- -  Prime Video</option>                    
                  <option value="20">- - - -  All Videos</option>                     
                  <option value="21">- - - -  Blouses</option>                        
                  <option value="22">- - - -  Evening Dresses</option>                
                  <option value="23">- - - -  Summer Dresses</option>                     
                  <option value="24">- - - -  T-shirts</option>                       
                  <option value="25">- - - -  Rent or Buy</option>                        
                  <option value="26">- - - -  Your Watchlist</option>                     
                  <option value="27">- - - -  Watch Anywhere</option>                     
                  <option value="28">- - - -  Getting Started</option>         
                  <option value="18">- - - -  Computers</option>                      
                  <option value="29">- - - -  More to Explore</option>         
                  <option value="30">- - - -  TV &amp; Video</option>                     
                  <option value="31">- - - -  Audio &amp; Theater</option>               
                  <option value="32">- - - -  Camera, Photo </option>
                  <option value="33">- - - -  Cell Phones</option>                        
                  <option value="34">- - - -  Headphones</option>                     
                  <option value="35">- - - -  Video Games</option>                        
                  <option value="36">- - - -  Wireless Speakers</option>            
                  <option value="19">- - - -  Electronics</option>                        
                  <option value="37">- - - -  Amazon Home</option>                        
                  <option value="38">- - - -  Kitchen &amp; Dining</option>           
                  <option value="39">- - - -  Furniture</option>                      
                  <option value="40">- - - -  Bed &amp; Bath</option>                     
                  <option value="41">- - - -  Appliances</option>                 
                  <option value="11">TV &amp; Audio</option>                  
                  <option value="42">- -  Chamcham</option>                        
                  <option value="45">- - - -  Office</option>                     
                  <option value="47">- - - -  Gaming</option>                 
                  <option value="48">- - - -  Chromebook</option>                     
                  <option value="49">- - - -  Refurbished</option>                    
                  <option value="50">- - - -  Touchscreen</option>                        
                  <option value="51">- - - -  Ultrabooks</option>                     
                  <option value="52">- - - -  Blouses</option>                        
                  <option value="43">- -  Meito</option>                        
                  <option value="53">- - - -  Hard Drives</option>                        
                  <option value="54">- - - -  Graphic Cards</option>                      
                  <option value="55">- - - -  Processors (CPU)</option>  
                  <option value="56">- - - -  Memory</option>                     
                  <option value="57">- - - -  Motherboards</option>                       
                  <option value="58">- - - -  Fans &amp; Cooling</option> 
                  <option value="59">- - - -  CD/DVD Drives</option>                      
                  <option value="44">- -  XailStation</option>                        
                  <option value="60">- - - -  Sound Cards</option>                        
                  <option value="61">- - - -  Cases &amp; Towers</option>   
                  <option value="62">- - - -  Casual Dresses</option>                     
                  <option value="63">- - - -  Evening Dresses</option>       
                  <option value="64">- - - -  T-shirts</option>                       
                  <option value="65">- - - -  Tops</option>                                 
                  <option value="12">Smartphone</option>                  
                  <option value="66">- -  Camera Accessories</option>                     
                  <option value="68">- - - -  Octa Core</option>                      
                  <option value="69">- - - -  Quad Core</option>                  
                  <option value="70">- - - -  Dual Core</option>                      
                  <option value="71">- - - -  7.0 Screen</option>                     
                  <option value="72">- - - -  9.0 Screen</option>                     
                  <option value="73">- - - -  Bags &amp; Cases</option>                   
                  <option value="67">- -  Sanai</option>                     
                  <option value="74">- - - -  Batteries</option>                      
                  <option value="75">- - - -  Microphones</option>                        
                  <option value="76">- - - -  Stabilizers</option>                        
                  <option value="77">- - - -  Video Tapes</option>                        
                  <option value="78">- - - -  Memory Card Readers</option> 
                  <option value="79">- - - -  Tripods</option>           
                  <option value="13">Cameras</option>                          
                  <option value="14">headphone</option>                                
                  <option value="15">Smartwatch</option>                           
                  <option value="16">Accessories</option>
                </select>
                <input type="text" placeholder="Enter your key" />
                <button className="btn header__searchbox-btn" type="submit"><FontAwesomeIcon icon={faSearch} size="2x"/></button>

              </form>
              <div className="header__middle-right-menu">
                <ul className="hm-menu">
                  <li className="hm-likelist">
                    <Link to="#">
                      <span>0</span>
                      <FontAwesomeIcon icon ={faHeart} size="2x"/>
                    </Link>
                  </li>
                  <li className="hm-likelist">
                    <Link to="#">
                      <span>0</span>
                      <FontAwesomeIcon icon ={faShoppingCart} size="2x"/>
                    </Link>
                  </li>
                  <label htmlFor="display-mobile" className="hm-likelist farBars">
                    <FontAwesomeIcon icon={faBars} size="2x" onClick={togglehandler}/>
                  </label>
                </ul>
              </div>

            </div>
          </div>
        </div>
        
      </div>
      <div className="header__bottom" id="hb-menu">
          <div className="grid wide">
            <div className="row">
              <div className="col l-12 c-12 m-12">
                <div className="hb-menu">
                 <nav>
                   <ul className="hb-menu-list">
                     <li className="home hb-menu-item">
                       <Link to='/home'>Home</Link>
                     </li>
                     <li className="contact hb-menu-item">
                       <Link to="/contact">Contact</Link>
                     </li>

                   </ul>
                 </nav>
                </div>
              </div>
            </div>
          </div>
        </div>


    </header>
    
  )
}

export default Navbar

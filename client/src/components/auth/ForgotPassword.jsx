import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLock} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function ForgotPassWord() {
  return (
    <div className="container-fluid auth  ">
      <div className="row">
        <div className="sign-up col-lg-7 col-sm-3 col-md-4">
        </div>
        <div className="col-lg-5 col-sm-9 col-md-6 muiPaper muiPaper-root">
          <div className="avatar my-5">
              <div className="lock">
              <FontAwesomeIcon icon={faLock} size="2x"/>
              </div>
              
          </div>
          <div id="flag" className="mb-5">
            <span>Forgot Password</span></div>
            
            
          <form className="row g-5 ps-3">
            
            <div className="col-12">
              <input type="email" className="form-control height"  placeholder="Email"/>
            </div>
            
            
        <div className="col-12 d-grid gap-2">
           <button type="submit" className="btn btn-primary height fs ">Comfirm</button>
        </div>
        <div className="router">
          <Link to="/register"> Sign Up ?</Link>
          <Link to="/login"> Sign In </Link>

        </div>
      
    
      
     </form>
        </div>
      </div>
      
    </div>
  )
}

export default ForgotPassWord;

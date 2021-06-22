import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import {faLock} from '@fortawesome/free-solid-svg-icons';
function Register() {
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
            <span>Sign Up</span></div>
            
            
          <form className="row g-5 ps-3">
            
            <div className="col-12">
              <input type="email" className="form-control height"  placeholder="Email"/>
            </div>
            <div className="col-12">
              <input type="password" className="form-control height"  placeholder="Password"/>
            </div>
            <div className="col-12">
              <input type="password" className="form-control height"  placeholder="Password"/>
            </div>
            <div className="col-12">
               <input type="text" className="form-control height"  placeholder="1234 Main St"/>
            </div>
            <div className="col-12">
              <div className="form-check">
               <input className="form-check-input" type="checkbox" id="gridCheck"/>
                <label className="form-check-label" htmlFor="gridCheck">
                Remember me
                </label>
             </div>
            </div>
        <div className="col-12 d-grid gap-2">
           <button type="submit" className="btn btn-primary height fs ">Sign Up</button>
        </div>
        <div className="router-su">
          <Link to="/login">Already have an acount? Sign in </Link>

        </div>
      
     </form>
        </div>
      </div>
      
    </div>
  )
}

export default Register;

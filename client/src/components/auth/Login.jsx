import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import {faLock} from '@fortawesome/free-solid-svg-icons';
function Login() {
  const[formData,setFormData]=useState({
    email:'',
    password:''

  })
  const{ email,password}=formData;
  const onChange=e=>setFormData({...formData,[e.target.name]:e.target.value});
  const onSubmit=async e=>{
    e.preventDefult();
  }
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
            <span>Sign In</span></div>
            
            
          <form className="row g-5 ps-3" onSubmit={onSubmit}>
            
            <div className="col-12">
              <input type="email" className="form-control height"name="email" placeholder="Email" value={email} onChange={onChange}/>
            </div>
            <div className="col-12">
              <input type="password" className="form-control height" name="password"  placeholder="Password" value={password} onChange={onChange}/>
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
           <button type="submit" className="btn btn-primary height fs ">Sign In</button>
        </div>
        <div className="router">
          <Link to="/forgotpassword"> Forgot password ?</Link>
          <Link to="/register">Don't have acount? Sign Up </Link>

        </div>
      
     </form>
        </div>
      </div>
      
    </div>
  )
}

export default Login;
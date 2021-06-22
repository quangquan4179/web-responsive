import React,{useState,useEffect} from 'react';
import Input from '../input/Input';

function Checkout() {
  const [formData,setFormData]=useState({
    firstName:'',
    lastName:'',
    address:'',
    city:'',
    state:'',
    zip:'',
    country:''

  })
  const {firstName,lastName,address,city,state,zip,country}=formData;
  const onChange = e=> setFormData({...formData,[e.target.name]:e.target.value});
  const onSubmit= async e=>{
      e.preventDefault();
      console.log(formData)
   }
   
   useEffect(()=>{
     console.log(formData)

   },[formData])
   
  return (
    
    
    <div className="container-fluid checkout">
      <div className="row ">
         <header  className="header-checkout">
          <h2 >Company Name</h2>
        </header>
        <div className="p-5 main">
         
        <div className="body-checkout col-lg-6 px-lg-4 col-md-8 px-md-3  col-sm-12 px-sm-3  mt-5 ">
          <h1 className="title">Checkout</h1>
          <div className="checkbox-step d-flex">
            <div className="form-check form-check-inline ">
              <input className="form-check-input" type="checkbox" id="inlineRadio1" />
              <label className="form-check-label" htmlFor="inlineRadio1">Shipping address</label>
            </div>
            <div className="mini-line">
              <span></span>
            </div>
            <div className="form-check form-check-inline ">
              <input className="form-check-input" type="checkbox" id="inlineRadio2" />
              <label className="form-check-label" htmlFor="inlineRadio2">Payment details</label>
            </div>
            <div className="mini-line">
              <span></span>
            </div>
            <div className="form-check form-check-inline ">
              <input className="form-check-input" type="checkbox" id="inlineRadio3" />
              <label className="form-check-label" htmlFor="inlineRadio3">Preview your order</label>
            </div>
          </div>
          <div>
            <h3 className="mini-title my-3 py-5" >Shipping address</h3>
            <form className="row g-5 ps-3 " onSubmit={onSubmit}>
            <Input class={"col-sm-12 col-lg-6 col-md-6 group"} content={"First Name*"} name={"firstName"} values={firstName} onchange={onChange}/>
            <Input class={"col-sm-12 col-lg-6 col-md-6 group"} content={"Last Name*"}  name={"lastName"} values={lastName} onchange={onChange}/>
            <Input class={"col-12 group"} content={"Address*"} values={address} name={"address"} onchange={onChange}/>
            <Input class={"col-sm-12 col-lg-6 col-md-6 group"} content={"City*"} name={"city"} values={city} onchange={onChange}/>
            <Input class={"col-sm-12 col-lg-6 col-md-6 group"} content={"State/Province/Region*"} name={"state"} values={state} onchange={onChange}/>
            <Input class={"col-sm-12 col-lg-6 col-md-6 group"} content={"Zip/Postal code *"} name={"zip"} values={zip} onchange={onChange}/>
            <Input class={"col-sm-12 col-lg-6 col-md-6 group"} content={"Country*"} name={"country"} values={country} onchange={onChange}/>
            <div className="col-12">
              <div className="form-check">
               <input className="form-check-input" type="checkbox" id="gridCheck"/>
                <label className="form-check-label" htmlFor="gridCheck">
                  Use this address for payment details
                </label>
             </div>
            </div>
            <div className="col-12 d-flex mb-5">
               <button type="submit" className="btn btn-primary">Next</button>
            </div>
      
            </form>
          </div>
        </div>
        <h6> hello</h6>
        </div>
        
      </div>
    
      
      
    </div>

  
  )
}

export default Checkout

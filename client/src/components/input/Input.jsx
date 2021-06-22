import React from 'react'

const Input=(props)=> {
  return (
    <div className={props.class}>
      <input type="text" className="input-style" name={props.name}   onChange={props.onchange} required/>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label className="label-input">{props.content}</label>
      
    </div>
  )
}

export default Input;
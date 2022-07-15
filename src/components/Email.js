import React from 'react'
import "../styles/Email.css"

function Email(props) {
  return (
    <div className='email-container'>
      <h1>Contact Me !!!</h1>
      <div className='form--email'>
       
        <label>Name</label>
        <input 
        className='input--form' 
        name="fullName"
         type="text" 
         placeholder="John Doe" 
         value={props.name}
         onChange={props.handleChange}
         />
       
        <label >Email</label>
        <input 
        className='input--form' 
        name="email" 
        type="email" 
        placeholder="youremail@example.com"
        value={props.email}
        onChange={props.handleChange}
        />
       
        <label>Message</label>
        <input 
        className='input--form' 
        name="message"
        value={props.message}
        onChange={props.handleChange}
        />
      </div>
    </div>
  )
}

export default Email
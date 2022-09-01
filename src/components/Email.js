import React from 'react'
import "../styles/Email.css"

function Email(props) {
  return (
    <div className='email-container'>
      <h1>Leave me a message</h1>
      <div className='form--email'>
       
        <label>Name</label>
        <input 
        className='input--form' 
        name="fullName"
         type="text" 
         placeholder="John Doe" 
         value={props.name}
         onChange={props.handleChange}
         required
         />
       
        <label >Email</label>
        <input 
        className='input--form' 
        name="email" 
        type="email" 
        placeholder="youremail@example.com"
        value={props.email}
        onChange={props.handleChange}
        required
        />
       
        <label>Message</label>
        <input 
        className='input--form' 
        name="message"
        value={props.message}
        onChange={props.handleChange}
        required
        />
      </div>
    </div>
  )
}

export default Email
import React from 'react'
import "../styles/Email.css"

function Email() {
  return (
    <div className='email-container'>
      <h1>Contact Me !!!</h1>
      <div className='form--email'>
        <label>Name</label>
        <input className='input--form' name="fullName" type="text" placeholder="John Doe" />
        <label >Email</label>
        <input className='input--form' placeholder="youremail@example.com"/>
        <label>Message</label>
        <input className='input--form' />
      </div>
    </div>
  )
}

export default Email
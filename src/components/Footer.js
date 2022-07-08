import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon />
            <GitHubIcon />
            <TwitterIcon />
            <LinkedInIcon />
        </div>
        <p> &copy; 2022 Daffa Daniarfa</p>
    </div>
  )
}

export default Footer
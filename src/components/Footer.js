import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css"
import { Link } from '@mui/material';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
          
            <Link href='https://www.instagram.com/daffadaniarfa/'><InstagramIcon /></Link>
            <Link href='https://github.com/daniarfadd'><GitHubIcon /></Link>
            <Link href='https://twitter.com/Daffa_D8'><TwitterIcon /></Link>
            <Link href='https://www.linkedin.com/in/daniarfad/'><LinkedInIcon /></Link>
            
            
            
            
          
            
        </div>
        <p> &copy; 2022 Daffa Daniarfa</p>
    </div>
  )
}

export default Footer
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Home.css"
import Spline from "@splinetool/react-spline";
import { Link } from '@mui/material';
import Typed from 'typed.js';
import { useRef, useEffect } from 'react';
import Email from '../components/Email';


function Home() {

  const el = useRef(null);
  // Create reference to store the Typed instance itself
	const typed = useRef(null);

  useEffect(() => {
    const options = {
    	strings: [
        'Mochammad Daffa',
        'Daniarfa Darmawan'
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop:true
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

    return (
      <div className="home">
          <div className='spline'>
          <Spline scene="https://prod.spline.design/KKTyTJtjcJ1Dp7vo/scene.splinecode" />
        </div>
        <div className="about">
          <h2> Hello, My Name is <span className='daffa' ref={el}></span></h2>
          <div className="prompt">
            <p>A software developer with a passion for learning and creating.</p>
            <Link href='https://www.linkedin.com/in/daniarfad/'><LinkedInIcon /></Link>
            <Link href='mailto:moch.daniarfa@gmail.com'><EmailIcon /></Link>
            <Link href="https://github.com/daniarfadd"><GitHubIcon /></Link>
          </div>
        </div>

        <div className="skills">
          <h1> Skills</h1>
          <ol className="list">
            <li className="item">
              <h2> Front-End</h2>
              <span>
                ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
                Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
              </span>
            </li>
         
            <li className="item">
              <h2>Languages</h2>
              <span>JavaScript, Java, Python, C#, C, C++, TypeScript, Go</span>
            </li>
          </ol>
        </div>
        
        <form>
          <Email />
          <button type='submit'>Send</button>
        </form>
      </div>
    );
  }
  
  export default Home;
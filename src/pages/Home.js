import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Home.css"
import Spline from "@splinetool/react-spline";

function Home() {
    return (
      <div className="home">
          <div className='spline'>
          <Spline scene="https://prod.spline.design/KKTyTJtjcJ1Dp7vo/scene.splinecode" />
        </div>
        <div className="about">
          <h2> Hello, My Name is Daffa Daniarfa</h2>
          <div className="prompt">
            <p>A software developer with a passion for learning and creating.</p>
            <LinkedInIcon />
            <EmailIcon />
            <GitHubIcon />
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
      </div>
    );
  }
  
  export default Home;
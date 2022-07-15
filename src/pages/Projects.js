import ProjectItem from "../components/ProjectItem";
import "../styles/Projects.css"
import data from "../data"

function Projects() {


    const projectItems = data.map((item, index) => (
        <ProjectItem name={item.name} img={item.img} key={item.name} id={index} />
    ))


    return ( 
        <div className="projects">
            <h1>Projects</h1>
            <div className="projectList">
                {projectItems}
            </div>
        </div>
     );
}

export default Projects;
import { useNavigate } from "react-router-dom"

function ProjectItem(props) {

    const navigate = useNavigate()

    function moveToDetail () {
        navigate("/projects/" + props.id )
    }

  return (
    <div className="projectItem" onClick={moveToDetail}>
        {/* <div style={{backgroundImage: `url(${props.img})`}} className="bgImage"/> */}
        <img src={props.img} className="bgImage"/>
        <h1>{props.name}</h1>
    </div>
  )
}

export default ProjectItem
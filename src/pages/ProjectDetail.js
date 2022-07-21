import React from 'react'
import { useParams } from "react-router-dom"
import data from "../data"
import "../styles/ProjectDetail.css"
import { GitHub } from '@mui/icons-material';
import { Link } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';



function ProjectDetail() {
  const { id } = useParams()
  const project = data[id]
  return (
    <div className='project'>
      <h1>{project.name}</h1>
      <img src={project.img} alt="my project" />
      <div className='project--link'>
        <Link href={project.link}><GitHub /></Link>
        {project.demo && <Link href={project.demo}> <LinkIcon /> </Link>}
      </div>

    </div>
  )
}

export default ProjectDetail
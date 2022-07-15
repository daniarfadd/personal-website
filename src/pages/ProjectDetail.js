import React from 'react'
import { useParams } from "react-router-dom"
import data from "../data"
import "../styles/ProjectDetail.css"
import { GitHub } from '@mui/icons-material';
import { Link } from '@mui/material';



function ProjectDetail() {
  const { id } = useParams()
  const project = data[id]
  return (
    <div className='project'>
      <h1>{project.name}</h1>
      <img src={project.img} alt="my project"/>
      <Link href={project.link}> <GitHub /> </Link>
    </div>
  )
}

export default ProjectDetail
import React from 'react'

const ProjectSummary = ({project}) => {
    return (
        <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{project.title}</span>
                    <p>Posted by {project.authorFirstName}</p>
                    <p className="grey-text">September, 3pm</p>
                </div>
            </div>
    )
}

export default ProjectSummary
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProject, deleteProject } from '../components/Projects';
// import '../Profile/raw.css';
const ProjectsForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const projects = useSelector((state) => state.projects.projects || []);
  
  const [projectInput, setProjectInput] = useState({
    projectName: '',
    techStack: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectInput(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddProject = () => {
    if (projectInput.projectName.trim()) {
      dispatch(addProject(projectInput));
      setProjectInput({
        projectName: '',
        techStack: '',
        description: ''
      });
    }
  };

  const handleDeleteProject = (index) => {
    dispatch(deleteProject(index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/social');
  };

  const handleBack = () => {
    navigate('/skills');
  };

  return (
    <div className="projects-form">
      <h2>Mini Project</h2>
      
      <div className="project-input-group">
        <div className="form-group">
          <label>Project Name *</label>
          <input
            type="text"
            name="projectName"
            value={projectInput.projectName}
            onChange={handleInputChange}
            placeholder="Enter project name"
            required
          />
        </div>
        
        <div className="form-group">
          <label>Tech Stack</label>
          <input
            type="text"
            name="techStack"
            value={projectInput.techStack}
            onChange={handleInputChange}
            placeholder="Technologies used"
          />
        </div>
        
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={projectInput.description}
            onChange={handleInputChange}
            placeholder="Project description"
            rows="3"
          />
        </div>
        
        <button
          type="button"
          id="add_project"
          className="add-button"
          onClick={handleAddProject}
        >
          ADD PROJECT
        </button>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.projectName}</h3>
            <p><strong>Tech Stack:</strong> {project.techStack}</p>
            <p><strong>Description:</strong> {project.description}</p>
            <button
              type="button"
              className="delete-button"
              onClick={() => handleDeleteProject(index)}
            >
              DELETE
            </button>
          </div>
        ))}
      </div>

      <div className="navigation-buttons">
        <button
          type="button"
          id="back"
          className="back-button"
          onClick={()=>navigate('/skills')}
        >
          BACK
        </button>
        <button
          type="button"
          id="next"
          className="next-button"
          onClick={() => navigate('/socialMedia')}
        >
          NEXT
        </button>
        <button
          type="submit"
          id="save_continue"
          className="save-button"
          onClick={handleSubmit}
        >
          SAVE AND CONTINUE
        </button>
      </div>
    </div>
  );
};

export default ProjectsForm;
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';
import '../styles/FinalResume.css'; // More standard path
const FinalResume = () => {
  const navigate = useNavigate();
  const componentRef = useRef();
  const profile = useSelector((state) => state.profile);
  const education = useSelector((state) => state.education);
  const skills = useSelector((state) => state.skills.skills || []);
  const projects = useSelector((state) => state.projects.projects || []);
  const socialLinks = useSelector((state) => state.social.socialLinks || []);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleReset = () => {
    // You may want to dispatch a reset action here
    navigate('/');
  };  

  const handleEdit = () => {
    navigate('/profile');
  };

  return (
    <div className="final-resume-container">
      <div className="resume-actions">
        <button onClick={handleReset} className="reset-button">RESET</button>
        <button onClick={handleEdit} className="edit-button">EDIT</button>
        <button onClick={handlePrint} className="download-button">DOWNLOAD / PREVIEW</button>
      </div>

      <div ref={componentRef} className="resume-content">
        <h1>{profile.name || 'Name'} {profile.lname || 'Last'}</h1>
        
        <div className="contact-info">
          <p><strong>Address:</strong> {profile.address || 'Somewhere'}</p>
          <p><strong>Phone Number:</strong> {profile.phone || '2345678901'}</p>
          <p><strong>Email:</strong> {profile.email || ''}</p>
        </div>

        {education.length > 0 && (
          <div className="education-section">
            <h2>Education</h2>
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <p><strong>{edu.college || 'College'}</strong></p>
                <p>Graduation Year: {edu.completionYear || '2023'}</p>
                <p>Course: {edu.courseName || 'Course'}</p>
                <p>Percentage: {edu.percentage || '87%'}</p>
              </div>
            ))}
          </div>
        )}

        {skills.length > 0 && (
          <div className="skills-section">
            <h2>Skills</h2>
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        )}

        {projects.length > 0 && (
          <div className="projects-section">
            <h2>Mini Projects</h2>
            {projects.map((project, index) => (
              <div key={index} className="project-item">
                <p><strong>{project.projectName || 'Name'}</strong></p>
                <p>{project.description || 'Description'}</p>
                <p>Tech Stack: {project.techStack || 'Stack'}</p>
              </div>
            ))}
          </div>
        )}

        {socialLinks.length > 0 && (
          <div className="social-section">
            <h2>Social Links</h2>
            <ul>
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinalResume;



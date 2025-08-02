// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import {
//   setName,
//   setCompletionYear,
//   setCollege,
//   setPercentage,
//   addEducation,
//   deleteLastEducation
// } from '../components/Education'; 

// const EducationForm = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { current } = useSelector((state) => state.education);
  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     switch (name) {
//       case 'courseName':
//         dispatch(setName(value));
//         break;
//         case 'completionYear':
//           dispatch(setCompletionYear(value));
//           break;
//           case 'college':
//             dispatch(setCollege(value));
//             break;
//             case 'percentage':
//               dispatch(setPercentage(value));
//               break;
//               default:
//                 break;
//               }
//             };
          
      
//   const handleAdd = () => {
//     dispatch(addEducation()); 
//   };

//   const handleDelete = () => {
//     dispatch(deleteLastEducation()); 
//   };

//   return (
//     <div>
//       <h2>Add your Education Details</h2>
//       <input
//         type="text"
//         name="courseName"
//         placeholder="Course Name*"
//         value={current.name}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="completionYear"
//         placeholder="Completion Year*"
//         value={current.completionYear}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="college"
//         placeholder="College/School*"
//         value={current.college}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="percentage"
//         placeholder="Percentage*"
//         value={current.percentage}
//         onChange={handleChange}
//       />

//       <button onClick={handleDelete}>DELETE</button>
//       <button onClick={handleAdd}>ADD EDUCATION</button>

//       <br />

// <button onClick={() => navigate('/')}>BACK</button>
//       <button onClick={() => navigate('/skills')}>NEXT</button>
//       <button>SAVE AND CONTINUE</button>  
//     </div>
//   );
// };

// export default EducationForm;
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  setName,
  setCompletionYear,
  setCollege,
  setPercentage,
  addEducation,
  deleteEducation
} from '../components/Education'; // Updated import path

const EducationForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // Safely access Redux state with fallbacks
  const educationState = useSelector((state) => state.education || {
    current: {
      name: '',
      completionYear: '',
      college: '',
      percentage: ''
    },
    entries: []
  });
  
  const { current, entries = [] } = educationState;

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'courseName':
        dispatch(setName(value));
        break;
      case 'completionYear':
        dispatch(setCompletionYear(value));
        break;
      case 'college':
        dispatch(setCollege(value));
        break;
      case 'percentage':
        dispatch(setPercentage(value));
        break;
      default:
        break;
    }
  };

  const handleAdd = () => {
    if (current?.name && current?.completionYear) {
      dispatch(addEducation());
    }
  };

  const handleDelete = (index) => {
    dispatch(deleteEducation(index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (entries.length > 0) {
      navigate('/skills');
    }
  };

  return (
    <div className="education-form">
          <h2>Add your Education Details</h2>
      
      <div className="current-education">
        <input
          type="text"
          name="courseName"
          placeholder="Course Name*"
          value={current?.name || ''}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="completionYear"
          placeholder="Completion Year*"
          value={current?.completionYear || ''}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="college"
          placeholder="College/School*"
          value={current?.college || ''}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="percentage"
          placeholder="Percentage"
          value={current?.percentage || ''}
          onChange={handleChange}
        />
      </div>

      <div className="education-actions">
        <button 
          type="button" 
          onClick={handleAdd}
          disabled={!current?.name || !current?.completionYear}
        >
          Add your Education Details
        </button>
      </div>

      {entries?.length > 0 ? (
        <div className="education-list">
          <h3>Your Education Entries:</h3>
          {entries.map((edu, index) => (
            <div key={`edu-${index}`} className="education-item">
              <p>{edu?.name || 'N/A'} - {edu?.completionYear || 'N/A'}</p>
              <p>{edu?.college || 'N/A'} {edu?.percentage ? `(${edu.percentage}%)` : ''}</p>
              <button 
                type="button"
                onClick={() => handleDelete(index)}
                aria-label={`Delete ${edu?.name || 'entry'} ${index}`}
              >
                DELETE
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-entries">No education entries added yet</p>
      )}

      <div className="navigation-buttons">
        <button type="button" onClick={() => navigate('/profile')}>BACK</button>
        <button 
          type="button" 
          onClick={handleSubmit}
          disabled={entries?.length === 0}
        >
          SAVE AND CONTINUE
        </button>
        <button 
          type="button" 
          onClick={() => navigate('/skills')}
          disabled={entries?.length === 0}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default EducationForm;
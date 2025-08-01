import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addSocial, deleteSocial } from '../components/SocialMedia';

const SocialMediaForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const socialLinks = useSelector((state) => state.social.socialLinks || []);
  const [socialInput, setSocialInput] = useState('');

  const handleAddSocial = () => {
    if (socialInput.trim()) {
      dispatch(addSocial(socialInput));
      // console.log(socialInput); 
      setSocialInput('');
    }
  };

  const handleDeleteSocial = (index) => {
    dispatch(deleteSocial(index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/final-resume'); // Navigate to final resume section
  };

  const handleBack = () => {
    navigate('/'); // Navigate back to projects section
  };

  return (
    <div className="social-form">
      <h2>Social</h2>
      
      <div className="social-input-group">
        <label>Social Links *</label>
        <input
          type="url"
          name="Social"
          value={socialInput}
          onChange={(e) => setSocialInput(e.target.value)}
          placeholder="Enter social media URL"
        />
        <button
          type="button"
          id="add_social"
          className="add-button"
          onClick={handleAddSocial}
        >
          ADD SOCIAL
        </button>
      </div>

      <div className="social-links-list">
        {socialLinks.map((link, index) => (
          <div key={index} className="social-item">
            <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
            <button
              type="button"
              className="delete-button"
              onClick={() => handleDeleteSocial(index)}
            >
              DELETE SOCIAL
            </button>
          </div>
        ))}
      </div>

      <div className="navigation-buttons">
        <button
          type="button"
          id="back"
          className="back-button"
          onClick={handleBack}
        >
          BACK
        </button>
        <button
          type="button"
          id="next"
          className="next-button"
          onClick={() => navigate('/finalResume')}
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

export default SocialMediaForm;
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addSkill, deleteSkill } from '../components/Skills'; // Changed import path

const SkillsForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // Properly access the skills array from Redux state
    const skills = useSelector((state) => state.skills.skills || []);
    const [skillInput, setSkillInput] = useState('');

    const handleAddSkill = () => {
        if (skillInput.trim()) {
            dispatch(addSkill(skillInput));
            setSkillInput('');
        }
    };

    const handleDeleteSkill = (index) => {
        dispatch(deleteSkill(index));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/projects');
    };

    const handleBack = () => {
        navigate('/education');
    };

    return (
        <div >
            <h2>ANY</h2>

            <div >
                <label>Skill*</label>
                <input
                    type="text"
                    name="skill"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    placeholder="Enter a skill"
                />
                <button
                    type="button"
                    id="add_skill"
                    className="add-button"
                    onClick={handleAddSkill}
                >
                    ADD SKILL
                </button>
            </div>

            <div className="skills-list">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                        <span>{skill}</span>
                        <button
                            type="button"
                            className="delete-button"
                            onClick={() => handleDeleteSkill(index)}
                        >
                            DELETE SKILL
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
                    onClick={() => navigate('/projects')}
                >
                    NEXT
                </button>
                <button
                    type="submit"
                    id="save_continue"
                    className="save-button"
                    onClick={() => navigate('/projects')}
                >
                    SAVE AND CONTINUE
                </button>
            </div>
        </div>
    );
};

export default SkillsForm;



























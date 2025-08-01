
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Changed from useHistory to useNavigate
import { updateProfile, updateProfileImage } from '../components/Profile';

const ProfileForm = () => {
  const navigate = useNavigate(); // Using useNavigate instead of useHistory
  const dispatch = useDispatch();
  const personalDetails = useSelector((state) => state.profile);

  const [formData, setFormData] = useState({
    name: personalDetails.name || "",
    lname: personalDetails.lname || "",
    email: personalDetails.email || "",
    phone: personalDetails.phone || "",
    address: personalDetails.address || ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(updateProfileImage(reader.result));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(formData));
    navigate("/education"); // Changed from history.push to navigate
  };

  return (
    <div className="profile-form">
      <h2>RESUME GENERATOR</h2>
      <div className="image-upload">
        {personalDetails.imageUrl ? (
          <img src={personalDetails.imageUrl} alt="Profile" className="profile-image" />
        ) : (
          <div className="image-placeholder">No image selected</div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          id="profileImage"
          style={{ display: 'none' }}
        />
        <label htmlFor="profileImage" className="upload-button">Choose Profile Image</label>
      </div>

      <form onSubmit={handleSubmit}>
          <h2>Add your profile details</h2>
        <div className="form-group">
          <label>First Name</label>
          <input type="text" name="fname" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" name="lname" value={formData.lname} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} rows="3" />
        </div>

        <button type="submit" className="save-button">Save and Continue</button>
      </form>
    </div>
  );
};

export default ProfileForm;
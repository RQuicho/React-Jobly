import React, {useState, useContext} from 'react';
import JoblyApi from '../api';
import UserContext from '../UserContext';

const ProfileForm = () => {
  const {currentUser, setCurrentUser} = useContext(UserContext);
  const [formData, setFormData] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    username: currentUser.username,
    password: '',
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let profileData = {
      firsName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    let username = formData.username;
    let updatedUser;

    try {
      updatedUser = await JoblyApi.saveProfile(username, profileData);
    } catch(err) {
      console.error('Error updating profile', e);
      return;
    }

    setFormData(data => ({
      ...data,
      password: ''
    }));
    setCurrentUser(updatedUser);
  }
  
  return (
    <div>
      <h3>Profile</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <p>{formData.username}</p>
        <label htmlFor='firstName'>First Name</label>
          <input 
            id='firstName'
            type='text'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
          />
        <label htmlFor='lastName'>Last Name</label>
          <input 
            id='lastName'
            type='text'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
          />
        <label htmlFor='email'>Email</label>
          <input 
            id='email'
            type='text'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
        <label htmlFor='password'>Password</label>
          <input 
            id='password'
            type='text'
            name='password'
            value={formData.password}
            onChange={handleChange}
          />
      </form>
      <button>Save</button>
    </div>
  )
}

export default ProfileForm;
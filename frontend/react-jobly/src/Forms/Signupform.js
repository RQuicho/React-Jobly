import React, {useState} from 'react';
import { Navigate } from 'react-router-dom';

const SignupForm = ({signup}) => {
  const initialState = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: ''
  }
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = await signup(formData);
    if (result.success) {
      <Navigate to='/companies'/>
    } else {
      console.error('form error', result.errors);
      return (<p>{`Error: ${result.errors}`}</p>);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input 
          id='username'
          type='text'
          name='username'
          placeholder='new username'
          value={formData.username}
          onChange={handleChange}
        />
      <label htmlFor='password'>Password</label>
        <input 
          id='password'
          type='text'
          name='password'
          placeholder='password'
          value={formData.password}
          onChange={handleChange}
        />
      <label htmlFor='firstName'>First Name</label>
        <input 
          id='firstName'
          type='text'
          name='firstName'
          placeholder='first name'
          value={formData.firstName}
          onChange={handleChange}
        />
      <label htmlFor='lastName'>Last Name</label>
        <input 
          id='lastName'
          type='text'
          name='lastName'
          placeholder='last name'
          value={formData.lastName}
          onChange={handleChange}
        />
      <label htmlFor='email'>Email</label>
        <input 
          id='email'
          type='text'
          name='email'
          placeholder='email'
          value={formData.email}
          onChange={handleChange}
        />
      </form>
      <button>Submit</button>
    </div>
  )
}

export default SignupForm;
import React from 'react';

const SignupForm = ({addUser}) => {
  const initialState = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: ''
  }
  const [formData, setFormData] = useState(initialState);

  const handleChange = () => {
    const {name, value} = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({...formData});
    setFormData(initialState);
  }

  return (
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
  )
}

export default SignupForm;
import React from 'react';

const LoginForm = ({login}) => {
  const initialState = {
    username: '',
    password: ''
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
    login({...formData});
    setFormData(initialState);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='username'>Username</label>
      <input 
        id='username'
        type='text'
        name='username'
        placeholder='username'
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
    </form>
  )
}

export default LoginForm;
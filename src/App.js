import './App.css';
import { useRef, useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '' 
  });
  const [errorPassword, setErrorPassword] = useState(null);

  function validatePassword(){
    if(formData.password.length < 8){
      setErrorPassword('Password should have at least 8 characters');
      return false;
    }else{
      setErrorPassword(false)
    }
  }

function handleSubmit(e){
  e.preventDefault();
  if(formData.firstName || formData.lastName || formData.email || formData.role){
    if(validatePassword){
      alert('Submited')
      return
    } 
  }
  alert('No submited')
}

function handleChange(e){
  const {name, value} = e.target;
  setFormData(prevData => ({
    ...prevData,
    [name]: value
  }));
};

  return(
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <div>
        <label>
          First Name
          <input
            name='firstName'
            value={formData.name}
            type='text'
            onChange={handleChange}
            placeholder='First Name'
            required
          />
        </label>
      </div>

      <div>
        <label>
          Last Name
          <input
            name='lastName'
            value={formData.lastName}
            type='text'
            onChange={handleChange}
            placeholder='Last Name'
            required
          />
        </label>
      </div>

      <div>
        <label>
          Email Address
          <input
            name='email'
            value={formData.email}
            type='email'
            onChange={handleChange}
            placeholder='Email Address'
            required
          />
        </label>
      </div>

      <div>
        <label>
          Password
          <input
            name='password'
            value={formData.password}
            type='password'
            onChange={handleChange}
            onBlur={validatePassword}
            placeholder='Password'
            required
          />
          <span>{errorPassword}</span>
        </label>
      </div>

      <div>
        <label>Role</label>
          <select name='role' value={formData.role} onChange={handleChange} required>
            <option value=''>Role</option>
            <option value='individual '>Individual </option>
            <option value='business'>Business</option>
          </select>
      </div>
      <button type='submit'>CREATE ACCOUNT</button>
    </form>
  )
}


export default App;

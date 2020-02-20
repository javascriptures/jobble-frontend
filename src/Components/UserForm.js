import React from 'react';
import TextField from '@material-ui/core/TextField'

const UserForm = ({ user, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit} className='form'>
    <div className="typefields">
    <label htmlFor="title">Username</label>
    <TextField
      id="outlined-basic" label="Username" variant="outlined"
      username="UserForm"
      value={user.username}
      name="username"
      onChange={handleChange}
      required
    />
    <br />
    </div>
  <div className="typefields">
    <label htmlFor="password">Password</label>
    <TextField
      id="outlined-basic" label="Password" variant="outlined"
      className="UserForm"
      value={user.password}
      name="password"
      onChange={handleChange}
    />

    <br />
  </div>

    <button type="submit">Submit</button>
  </form>
);

export default UserForm;

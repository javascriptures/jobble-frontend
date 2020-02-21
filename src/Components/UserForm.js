import React from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';

const UserForm = ({ user, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit} className='form'>
    <div className="typefields">
    <label htmlFor="title">Username:</label>
    <div>
    <TextField
      id="outlined-basic" label="Username" variant="outlined"
      username="UserForm"
      value={user.username}
      name="username"
      onChange={handleChange}
      required
    />
    </div>
    <br />
    </div>
  <div className="typefields">
    <label htmlFor="password">Password:</label>
    <div>
    <TextField
      id="outlined-basic" label="Password" variant="outlined"
      className="UserForm"
      value={user.password}
      name="password"
      onChange={handleChange}
    />

    <br />
  </div>

  <Button size="large" type="submit">Submit</Button>

    </div>
  </form>
);

export default UserForm;

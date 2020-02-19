import React from 'react';

const UserForm = ({ user, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <label htmlFor="title">Username</label>
    <input
      username="Username"
      value={user.username}
      name="username"
      onChange={handleChange}
      required
      id="username"
    />
    <br />

    <label htmlFor="password">Password</label>
    <input
      placeholder="Password Name"
      value={user.password}
      name="password"
      onChange={handleChange}
      id="password"
    />

    <br />

    <button type="submit">Submit</button>
  </form>
);

export default UserForm;

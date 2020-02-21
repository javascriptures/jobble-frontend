import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const UserHome = () => {
  const viewNewJobs = () => {
    return <Redirect to={`/review`} />;
  };
  const viewSavedJobs = () => {};
  const deleteAccount = () => {};

  return (
    <>
      <h1 className="UserHomeH1">
        Welcome to Jobble, (name will be filled in)!
      </h1>
      <div className="UserHomeButtons">
        <Button color="primary" component={Link} to="/review">
          View New Jobs
        </Button>
        <button className="UserHomeButton" onClick={viewSavedJobs}>
          View My Saved Jobs
        </button>
        <button className="UserHomeButton" onClick={deleteAccount}>
          Delete My Jobble Account <span> 😞 </span>
        </button>
      </div>
    </>
  );
};

export default UserHome;

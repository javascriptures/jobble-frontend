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
        <Button color="primary" component={Link} to="/savedjobs">
          View My Saved Jobs
        </Button>
        <Button color="primary" component={Link} to="/goodbye">
          Delete my Jobble account
        </Button>
      </div>
    </>
  );
};

export default UserHome;

import React from 'react';
const UserHome = () => {
  const viewNewJobs = () => {};
  const viewSavedJobs = () => {};
  const deleteAccount = () => {};

  return (
    <>
      <h1 className="UserHomeH1">
        Welcome to Jobble, (name will be filled in)!
      </h1>
      <div className="UserHomeButtons">
        <button className="UserHomeButton" onClick={viewNewJobs}>
          View New Jobs
        </button>
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

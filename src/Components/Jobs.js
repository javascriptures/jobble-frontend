import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { APIURL } from '../config';

const Jobs = props => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    // const url = `${APIURL}/api/jobs/refresh`;
    const url = `${APIURL}/api/jobs`;
    fetch(url, { mode: 'no-cors' })
      .then(response => response.json())
      .then(data => {
        console.log('Loading Jobs' + data[0]);
        setJobs(data);
      })
      .catch(() => {
        // Update the state if there was an error
        // so we can give feedback to the user!
        setError(true);
      });
  }, []);

  // Check if we have our jobs
  // Display "Loading..." if not
  if (jobs.length === 0) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Sorry, there was a problem.</div>;
  }

  return (
    <ul>
      {jobs.map(job => (
        <li key={job.id}>
          <Link to={`/jobs/${job.id}`}>{job.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Jobs;

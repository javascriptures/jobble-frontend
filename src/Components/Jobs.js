import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { APIURL } from '../config';

const Jobs = props => {
  const [jobs, setJobs] = useState([]);
  const [job, setJob] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    // const url = `${APIURL}/api/jobs/refresh`;
    // const url = `${APIURL}/api/jobs`;
    const myInit = {
      mode: 'no-cors'
    };
    // fetch('http://localhost:8080/jobs', myInit);
    // fetch('https://customercrmma.herokuapp.com/customers')
    fetch('http://localhost:8080/jobs/5e4c3dff47c3202355e3d5b8')
      .then(response => response.json())
      .then(job => {
        console.log('Loading Job' + job);
        setJob(job);
      })
      .catch(error => {
        console.log('Error: ', error);
        // Update the state if there was an error
        // so we can give feedback to the user!
        setError(true);
      });
  }, []);

  // // Check if we have our jobs
  // // Display "Loading..." if not
  // if (jobs.length === 0) {
  //   return <div>Loading...</div>;
  // }

  if (error) {
    return <div>Sorry, there was a problem.</div>;
  }

  return (
    <div>{job.title}</div>
    // <ul>
    //   {jobs.map(job => (
    //     <li key={job.id}>
    //       <Link to={`/jobs/${job.id}`}>{job.title}</Link>
    //     </li>
    //   ))}
    // </ul>
  );
};

export default Jobs;

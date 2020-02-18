import React, {useState, useEffect} from 'react';
import JobContainer from './JobContainer';
import { APIURL } from '../config';

const Job = ({ match }) => {
    const [jobs, setJobs] = useState([]);
    const [error, setError] = useState(false);

useEffect(() => {
    const url = `${APIURL}/api/jobs`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setJobs(data);
      })
      .catch(() => {
        // Update the state if there was an error
        // so we can give feedback to the user!
        setError(true);
      });
  }, []);

  if (error) {
      return <div>Sorry, there was a problem.</div>
  }

  return (
    <ul className="JobContainer">
      {jobs.map(job => (
        <JobContainer jobs={job}/>
      ))}
    </ul>
  );
}

export default Job;
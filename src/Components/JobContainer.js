import React, { useState, useEffect } from 'react';
import { APIURL } from '../config';

function JobContainer({ match }) {
  // const [job, setJob] = useState(null);
  const [job, setJob] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `${APIURL}/jobs/${match.params.id}`;
    fetch(url)
      .then(response => response.json())
      .then(setJob)
      .catch(error => {
        console.log(error);
        setError(true);
      });
  }, []);

  if (error) {
    console.log(match.params.id);
    return <div>Job didn't render</div>;
  }

  return (
    <div className="JobContainer">
      <h1>CONTAINER</h1>
      <h3>{job && job.title}</h3>
      <img src={job && job.company_logo} />
      <h1>{job && job.title}</h1>
      <h3>{job && job.company}</h3>
      <p>{job && job.location}</p>
      <p>{job && job.created_at}</p>
      <p>{job && job.how_to_apply}</p>
      {job &&
        (job.description =
          'we will perform string substitution here to convert HTML markdown to text')}
      {/* <p>{job && job.description}</p> */}
    </div>
  );
}

export default JobContainer;

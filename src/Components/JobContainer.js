import React, { useState, useEffect } from 'react';
import { APIURL } from '../config';

function JobContainer({ match }) {

  const [job, setJob] = useState(null);
  const [error, setError] = useState(null);
  const [userid, setUserid] = useState('5e4c6b9713a3f3fb809804e0');

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

  const saveJob = () => {
    const url = `${APIURL}/users/save/${match.params.id}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({ id: '5e4d82beaa14280004088afe' })
    }).then(res => res.json());
  };

  if (error) {
    console.log(match.params.id);
    return <div>Job didn't render</div>;
  }

  const saveJob = () => {
      const url = `${APIURL}/users/save/${job._id}`
      fetch(url, {method: 'PUT', body: JSON.stringify({id: userid}), headers: {
        'Content-Type': 'application/json'
      }})
      .then(res => res.json())
  }

  function handleClick(event) {
    event.preventDefault();
    saveJob();
  }

  return (
    <div className="JobContainer">
<<<<<<< HEAD
      <button className="save" onClick={saveJob}>
        Save
      </button>
=======
    <button onClick={handleClick}>Save</button>
    <button>Discard</button>
>>>>>>> 38e5c6864eca65fb184ed5e485a2e988ceff9d88
      <h1>{job && job.title}</h1>
      <img src={job && job.company_logo} alt={job && job.title} />
      <h3>{job && job.company}</h3>
      <p>{job && job.location}</p>
      <p>Posted: {job && job.created_at}</p>
      <h4>Apply:</h4>{' '}
      <div dangerouslySetInnerHTML={{ __html: job && job.how_to_apply }} />
      <div dangerouslySetInnerHTML={{ __html: job && job.description }} />
    </div>
  );
}

export default JobContainer;

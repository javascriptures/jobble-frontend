import React, { useState, useEffect } from 'react';
import {APIURL} from '../config'

function JobContainer({ match }) {
    const [job, setJob] = useState({})
    const [error, setError] = useState(null);
  
  useEffect(() => {
    const url = `${APIURL}/jobs/${match.params.id}`;
    fetch(url)
      .then(response => response.json())
      .then(response => console.log(response))
      .then(response => {setJob(response)})
      .then(console.log(url))
      .catch(error => {
        console.log(error);
        setError(true);
      });
  }, []);

  if (error) {
      console.log(match.params.id)
    return <div>Job didn't render</div>;
  }

  //  type = job.type;
  //const created_at = job.created_at;
  //const company = job.company;
  //const company_url = job.company_url;
  //const location = job.location;
//   const title = job.title;
//   const description = job.description;
//   const how_to_apply = job.how_to_apply;
//   const company_logo = job.company_logo;

  return (
    <div className="JobContainer">
        <h1>CONTAINER</h1>
        <h3>{job && job.title}</h3>
      {/* <img src={company_logo} />
      <h1>{title}</h1>
      <h3>{company}</h3>
      <p>{location}</p>
      <p>{created_at}</p>
      <p>{how_to_apply}</p>
      <p>{description}</p> */}
    </div>
  );
}

export default JobContainer;

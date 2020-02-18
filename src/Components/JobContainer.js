import React from 'react';
import Job from './Job.js'

function JobContainer({ jobs }) {
  const type = jobs.type;
  const created = jobs.created_at;
  const company = jobs.company;
  const title = jobs.title;
  const description = jobs.description;
  const logourl = jobs.company_logo;
  const location = jobs.location;

  return (
    <div className="MovieContainer">
        <img src={logourl}/>
      <h1>title</h1>
      <h3>company</h3>
      <p>created</p>
      <p>description</p>
    </div>
  );
}

export default JobContainer;
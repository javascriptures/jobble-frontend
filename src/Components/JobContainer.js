import React from 'react';

function JobContainer({ job }) {
  const type = job.type;
  const created_at = job.created_at;
  const company = job.company;
  const company_url = job.company_url;
  const location = job.location;
  const title = job.title;
  const description = job.description;
  const how_to_apply = job.how_to_apply;
  const company_logo = job.company_logo;

  return (
    <div className="JobContainer">
      <img src={company_logo} />
      <h1>{title}</h1>
      <h3>{company}</h3>
      <p>{created}</p>
      <p>{how_to_apply}</p>
      <p>{description}</p>
    </div>
  );
}

export default JobContainer;

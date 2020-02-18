import React from 'react';
import turkey from '../images/jobble-turkey.png';

function Home() {
  return (
    <>
      <h1 className="title">Jobble</h1>
      <h5 className="title">Job Posting Management for Job Seekers</h5>
      <img className="clink" src={turkey} alt="jobble turkey" />
      <link
        href="https://fonts.googleapis.com/css?family=Comfortaa&display=swap"
        rel="stylesheet"
      />
    </>
  );
}
export default Home;

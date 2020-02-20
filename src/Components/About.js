import React from 'react';
const About = () => {
  return (
    <div className="aboutContainer">
      <h1 className="aboutHeader">About Jobble</h1>
      <h2 className="aboutHeader"> Welcome to our app, your job hunting personal assistant!</h2>

      <img className="jobs" src="/about-images/job-hunting.jpg" alt=""/>

      <p> Jobble is a job seeker app which allows you to download and curate your own personal lists of jobs you are interested in applying for.</p>
      <p2>Sign up to Jobble today by signing up/in to Dashlane. And Start Hunting Your Dream Job. </p2>

      <h2 className="ourTeam"> Our Team </h2>
      <div className="profileContainer">
      <div className="profiles">
        <img className="pic" src="/about-images/ghazal.jpeg" alt="" width="100" height="100" />
        <h3 className="profileName">Ghazal</h3>
      </div>
      <div className="profiles">
        <img className="pic" src="/about-images/michelene.jpeg" alt="" width="100" height="100"/>
        <h3 className="profileName">Michelene</h3>
        </div>
        <div className="profiles">        
        <img className="pic" src="/about-images/jordan.jpeg" alt="" width="100" height="100"/>
        <h3 className="profileName">Jordan</h3>
        </div>
        <div className="profiles">
          <img className="pic" src="/about-images/qusai.jpeg" alt="" width="100" height="100"/>
          <h3 className="profileName">Qusai</h3>
        </div>
        </div>
    </div>
  );
};

export default About;

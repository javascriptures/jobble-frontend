import React from 'react';
const About = () => {
  return (
    <>
      <h1 className="aboutHeader">About Jobble</h1>
      <h2> Welcome to our app, your job hunting personal assistant!</h2>

      <img className="jobs" src="/about-images/job-hunting.jpg" alt=""/>

      <p> Jobble is a job seeker app which allows you to download and curate your own personal lists of jobs you are interested in applying for.</p>
      <p2>Sign up to Jobble today by signing up/in to Dashlane. And Start Hunting Your Dream Job. </p2>

      <h2> Our Team </h2>
      <img className="pic1" title="Ghazal" src="/about-images/ghazal.jpeg" alt="" width="100" height="100" />
      <img className="pic2" title="Michelene" src="/about-images/michelene.jpeg" alt="" width="100" height="100"/>
      <img className="pic3" title="Jordan" src="/about-images/jordan.jpeg" alt="" width="100" height="100"/>
      <img className="pic4" title="Qusai" src="/about-images/qusai.jpeg" alt="" width="100" height="100"/>
    </>
  );
};

export default About;

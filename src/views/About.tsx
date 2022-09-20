import { useState } from 'react';
import '../styles/about.css';

const AboutView = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className='container'>
      <div className='title'>
        <h1>John Schloss</h1>
      </div>
      <p className='welcome'>Hello, Thank you for taking the time to check out my website!</p>

      <div className='Education'>
        <h1 className='ed' onClick={() => setVisible(!visible)}>
          Education
        </h1>

        {visible && (
          <div className='education-text'>
            <ul className='education' style={{ fontSize: '2vw' }}>
              <strong>Vincennes Univeristiy</strong>
            </ul>
            <li className='ed-text'>Networking and Telecommunications - 2009 to 2010</li>
            <ul className='education' style={{ fontSize: '2vw' }}>
              <strong>Columbus State Community College</strong>
            </ul>
            <li className='ed-text'>General Studies - 2014 to 2015</li>
            <ul className='education' style={{ fontSize: '2vw' }}>
              <strong>The Ohio State Universtiy</strong>
            </ul>
            <li className='ed-text'>Computer Science - 2015</li>
          </div>
        )}
      </div>
      <div className='work'>
        <h1 className='text-center col-12'>Work Experience</h1>
        <ol>
          <h3 className='Army'>United States Army</h3>
          <ul className='job-title'>Infantry Radio Telecommunications Operator - 2011 to 2012</ul>

          <div className='rto-text'>
            <li>
              Tasked with mainting and operating radio equipment while deployed in a combat enviorment. Responsible for
              $3,000,000 worth of sensitive equipment
            </li>
            <li>
              Learned to communicate and provide up to date information to command when in stressful situations to help
              get aid to soldiers in combat situations
            </li>
          </div>

          <ul className='job-title'>Infantry Team Leader - 2012 to 2014</ul>
          <div className='team-text'>
            <li>Responsible for training and maintaing morale and health of young soldiers</li>
            <li>Tasked with ensuring that soldiers are combat ready</li>
            <li>
              Responsible for maintaing soldiers promtion packets, awards and ensuring that there counseling packets
              were up to date on a monthly basis
            </li>
          </div>
        </ol>

        <ol>
          <h3 className='pacmoore'>PacMoore Process Technoligies</h3>
          <ul className='job-title'>Forklift Driver 2021 to 2022</ul>
          <ul className='job-title'>Warehouse Management 2022 to Present</ul>
        </ol>
      </div>

      <div className='program'>
        <h1 className='text-center col-12'>Programming Experience</h1>
      </div>
    </div>
  );
};

export { AboutView };

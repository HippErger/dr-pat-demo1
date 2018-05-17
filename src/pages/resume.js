import React from 'react';
import Header from '../components/Header';




function Resume() {

  return (
    <div className='resumePage'>
      <Header />
      <div className='resumeText'>

        <h1 className="name"> Scott Foster</h1>
        <h3 className="title">Programmer</h3>


        <h4 className="section-title"> Profile </h4>

        <h5>
          Thank you for taking time to read this. I really appreciate it.
          You have come to the right place if you are looking for a Project Manager.
          I have been in the field for years but just recently started doing it professionally.
          I just finished up a short term contract to bring a site together before launch.
          I coordinated an international team of developers to bring individuals together to
          be a team in the last push to get the site launched.
        </h5>

        <hr />

        <h4 className="section-title"> Skills </h4>

        <div className="skill">Project Management:</div>
          <ul className='skills-ul'>
            <li className='skills-ul li'>
              Great verbal comminucations with team members from a spectrum of skill sets
            </li>
            <li className='skills-ul li'>
              Able to handle several issues at a time from many different directions.
            </li>
            <li className='skills-ul li'>Problem solving</li>
            <li className='skills-ul li'>Effective communicator</li>
            <li className='skills-ul li'>Team building</li>
            <li className='skills-ul li'>Relationship building</li>
          </ul>

          <br />
          <br />

        <div className="skill">Web Development:</div>
          <ul className='skills-ul'>
            <li className='skills-ul li'>HTML</li>
            <li className='skills-ul li'>CSS</li>
            <li className='skills-ul li'>JavaScript</li>
            <li className='skills-ul li'>React</li>
            <li className='skills-ul li'>Redux</li>
            <li className='skills-ul li'>Next</li>
            <li className='skills-ul li'>Node</li>
            <li className='skills-ul li'>Mongodb</li>
            <li className='skills-ul li'>mongoose</li>
            <li className='skills-ul li'>vs code</li>
            <li className='skills-ul li'>express</li>
            <li className='skills-ul li'>atom</li>
          </ul>
            <br/> <br />

            <hr />

        <h4 className="section-title"> Experience </h4>


        <div className="company">
          Rautenberg Media
        </div>
        <div className="company-position">
          <em>Project Management/QA Engineer</em>
        </div>


        <div className="company-description">

          <ul>
            <li className="company-summary"></li>
            <li><i className="fa fa-chevron-circle-right"></i>
            Managed a global team of developers
            </li>
            <li><i className="fa fa-chevron-circle-right"></i>
            Ensured product goals were clearly communicated and
              completed to standards
            </li>
            <li><i className="fa fa-chevron-circle-right"></i>
            Used scrum and agile methods to ensure maximum
              efficiency of all involved
            </li>
            <li><i className="fa fa-chevron-circle-right"></i>
              Wrote smoke tests to ensure the site was functioning properly
            </li>
          </ul>

        </div>

        <br />

        <div className="company">
          UMB
        </div>
        <div className="company-position">
          <em>Personal Banker</em>
        </div>


        <div className="company-description">

          <ul>
            <li className="company-summary"></li>
            <li><i className="fa fa-chevron-circle-right"></i>
              Built relationships for sales opportunities
            </li>
            <li><i className="fa fa-chevron-circle-right"></i>
              Worked under pressure to meet team goals
            </li>
            <li><i className="fa fa-chevron-circle-right"></i>
              Met federal and organizational guidelines for securing personal information
            </li>
          </ul>

        </div>

        <br />
        <div className="company">
          Quiktrip
        </div>
        <div className="company-position">
          <em>Manager/Trainer</em>
        </div>


        <div className="company-description">

          <ul>
            <li className="company-summary"></li>
            <li><i className="fa fa-chevron-circle-right"></i>
              Trained part time employees ensuring they met the goals and
              requirements of the job description
            </li>
            <li><i className="fa fa-chevron-circle-right"></i>
              Managed several employees meeting or exceeding the daily work
              assignments and ensuring accurate accounting for the shifts.
            </li>
            <li><i className="fa fa-chevron-circle-right"></i>
              Maintained and ordered inventory for the stores I managed
            </li>
          </ul>

        </div>


        <hr/>


        <h4 className="section-title"> Education </h4>


        <div className="education-section">

        <div className="school"> Austin Coding Academy </div>
          <div className="pull-right">
            Jul 2017
            </div>
          <i className="fa fa-graduation-cap"></i> Certificate in Full stack Web Development
        </div>

        <br/>

        <div className="education-section">

        <div className="school"> Kendall College </div>
          <div className="pull-right">
            Dec 2008
            </div>
            <i className="fa fa-graduation-cap"></i> A.A in Culinary Arts
        </div>


        <br />
        <div className="education-section">
          <div className="school">
            Columbia College
          </div>
          <div className="pull-right">
            June 2005
          </div>
          <i className="fa fa-graduation-cap"></i> B.A in Business Administration
        </div>

        <a className="resume-download"
          href="/static/ScottFosterResume.pdf" download="Scott-Foster-Resume">
            Download PDF Resume
        </a>

      </div>





      <style jsx> {`
            /* Resume styles */

      body {
          font-size: 12px;

      }

      hr {
          margin-top: 10px;
          margin-bottom: 10px;
      }

      .resumePage {
        margin-top: 20px;
      }

      .resumeText {
        padding: 10px;
      }

      .name {
          margin-top: 0px;
          margin-bottom: 0px;
          margin-right: 10px;
          font-size: 24px;
          text-align: right;
      }

      .title {
          margin-top: 0px;
          margin-bottom: 0px;
          margin-right: 10px;
          font-weight: 200;
          font-size: 18px;
          text-align: right;

      }

      .contact-info ul {
          list-style-type: none;
      }

      .section-title {
          font-size: 18px;
      }

      .skill {
          font-weight: bold;
      }

      .skills-ul {
          list-style-type: disc;
          list-style-position: inside;
          padding-left: 0;
          margin-left: 0;
      }

      .skills-ul li {
          float: left;
          margin-right: 8px;
      }

      .company, .school {
          font-size: 14px;
      }

      .company-position {

      }

      .company-summary {
          margin-bottom: 5px;
          font-weight: bold;
      }

      .company-description {
          margin-bottom: 10px;
      }

      .company-description ul {
          padding-left: 0px;
          list-style-type: none;
      }

      .education-section {
          margin-bottom: 20px;
      }

      .resume-download {
          text-decoration: none;
          background: #054A25;
          color: white;
          padding: 10px;
          align-self: center;
      }

          `}</style>

    </div>
  );
}

export default Resume;

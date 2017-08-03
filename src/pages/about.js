import React from 'react';
import Header from '../components/Header';

function AboutPage() {
  return (
    <div>
      <style jsx>{`
        h2 {
          font-family: arial;
          font-weight: lighter;
          text-align: center;
          color: #f4511e;
        }
        hr {
          border: 0;
          height: 1px;
          background: #333;
          background-image: linear-gradient(to right, #ccc, #33FFFF, #ccc);
        }
        h6 {
          text-align: center;
          font-family: arial;
          margin-bottom: 0;
          font-weight: lighter;
          font-size: 12px;
        }
        p {
          font-family: arial;
          font-weight: lighter;
          font-size: 13px;
          text-align: center;
          margin: 1% 10%;
        }
      `}</style>
      <Header />
      <h2>
        About page
      </h2>
      <hr />
      <h6>If the Doc&apos;s on-time, you&apos;re on-time.</h6>
      <p>
        QuickDocs is designed to make getting in and out of the doctor&apos;s office faster!
        Up-front information means less wait time in the office. Fill out the form
        and it will be sent directly to the doctor you choose. No paper. No wait.
      </p>
      <br />
      <hr />
    </div>
  );
}


export default AboutPage;

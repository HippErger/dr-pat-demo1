import React from 'react';
import Header from '../components/Header';
import Link from 'next/link';




function IndexPage() {
  const titleName = 'Dr. Patient';
  return (
    <div>
      <style jsx>{`
        h1 {
          font-family: arial;
          font-weight: normal;
        }
        p {
          font-family: arial;
          font-weight: lighter;
        }
        .welcome-message {
          width: 48%;
        }
        button {
          display: inline-block;
          border-radius: 4px;
          background-color: #f4511e;
          border: none;
          color: #FFFFFF;
          text-align: center;
          font-size: 10px;
          padding: 5px;
          width: 100px;
          transition: all 0.5s;
          cursor: pointer;
          margin: 0px 5px;
        }
        button span {
          cursor: pointer;
          display: inline-block;
          position: relative;
          transition: 0.5s;
        }
        button span:after {
          content: '\00bb';
          position: absolute;
          opacity: 0;
          top: 0;
          right: -20px;
          transition: 0.5s;
        }
        button:hover span {
          padding-right: 25px;
        }
        button:hover span:after {
          opacity: 1;
          right: 0;
        }
        .picture-div {
          background-image: url('https://c1.staticflickr.com/7/6080/6104068209_d134b246f5_b.jpg')
        }
      `}</style>
      <Header />
      <div>
        <h1>
           Welcome to, {titleName}
        </h1>
        <div className='welcome-message'>
          <p>
            At {titleName} we are committed your privacy, security and ease
            of access to quality healthcare. Start by selecting a doctor or creating a profile.
          </p>
          <Link href="/signUpPage">
            <button>
              <span>Create Profile</span>
            </button>
          </Link>
        </div>
      </div>
      <div className='picture-div'></div>
    </div>
  );

}

export default IndexPage;

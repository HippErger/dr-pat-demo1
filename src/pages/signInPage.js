import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
function signInPage() {
  return (
    <div>
      <style jsx>{`
        h4 {
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
        form {
          padding: 1%;
          margin-left: 25%;
          background-color: #ccc;
          width: 50%;
        }
        .input-area {
          padding-left: 11%;
        }
        input[type=text], select {
          width: 35%;
          padding: 1% 7%;
          margin: 0% 3% 2% 7%;
          display: inline-block;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
          text-align: center;
        }
        button {
          display: inline-block;
          border-radius: 4px;
          background-color: #f4511e;
          border: none;
          color: #FFFFFF;
          text-align: center;
          font-size: 10px;
          padding: 1%;
          width: 21%;
          transition: all 0.5s;f
          cursor: pointer;
          margin: 0% 1% auto 7.5%;
        }
        button:hover {
          background-color: #33FFFF;
          color: #f4511e;
        }
        .button-two {
          margin-left: 0%;
        }
      `}</style>
    <Header />
    <h4>Welcome Back!</h4>
    <hr />
    <form>
      <input type="text" username="username" value="" placeholder="username" />
      &nbsp; &nbsp;
      <input type="text" password="password" value="" placeholder="password"/>
      &nbsp; &nbsp;
      <button>Log in</button>
      &nbsp; &nbsp;
      <Link href='/patientMedicalForm'>
        <button className='button-two'>
          My Forms
        </button>
      </Link>
    </form>
    </div>
  );
}


export default signInPage;

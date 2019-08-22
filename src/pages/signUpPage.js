import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';


function signUpPage() {
  return (
    <div>
      <Header />
      <h3>You&apos;re one step closer!</h3>
      <marquee>
        <hr/>
      </marquee>
      <form>
        <div className='input-area'>
          <input type="text" name="username" value="" placeholder="username" />
          &nbsp; &nbsp;
          <input type="text" name="password" value="" placeholder="password"/>
          <br />
          <br />
          <input type="text" name="firstName" value="" placeholder="first name"/>
          &nbsp; &nbsp;
          <input type="text" name="lastName" value="" placeholder="last name"/>
          <br />
          <br />
          <input type="text" name="password" value="" placeholder="email"/>
          &nbsp; &nbsp;
          <input type="text" name="password" value="" placeholder="phone"/>
          <br />
          <br />
          <button>Submit</button>   &nbsp; &nbsp; &nbsp; &nbsp;
          <Link href="/signInPage">
            <button className='button-two'>Or, just sign-in</button>
          </Link>
          &nbsp; &nbsp;
        </div>
      </form>


      <style jsx>{`
        h3 {
          font-family: arial;
          font-weight: lighter;
          margin-left: 40%;
          color: #f4511e;
        }
        hr {
          border: 0;
          height: 1px;
          background: #333;
          background-image: linear-gradient(to right, #ccc, #33FFFF, #ccc);
        }
        form {
          padding: 3%;
          margin-left: 25%;
          background-color: #ccc;
          width: 50%;
        }
        .input-area {
          padding-left: 11%;
        }
        input[type=text], select {
          width: 35%;
          padding: 9px 14.4px;
          margin: 0px 5px auto 10px;
          display: inline-block;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
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
          width: 23%;
          transition: all 0.5s;f
          cursor: pointer;
          margin: 0px 5px auto 27px;
        }
        button:hover {
          background-color: #33FFFF;
          color: #f4511e;
        }
        .button-two {
          margin: 0px 5px auto 38px;
        }
      `}</style>
      
    </div>
  );
}

export default signUpPage;

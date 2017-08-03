import React from 'react';
import Link from 'next/link';


function Header() {
  // add style inline-block
  return (
    <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    &nbsp; &nbsp;
    <Link href="/about">
      <a>About</a>
    </Link>
    &nbsp; &nbsp;
    <Link href="/patientSignUpForm">
      <a>Sign-Up</a>
    </Link>
    &nbsp; &nbsp;
    <Link href="/listOfPatients">
    <a>Patient List</a>
    </Link>

    <style jsx>{`
       a {
         color: black;
         font-family: "arial";
         font-size: 12px;
         font-variant: small-caps;
         text-decoration: none;
         margin: 0 0 0 3%;
       }
       .first-a-tag {
         margin: 0 0 0 27%;
       }
       hr {
         height: 12px;
         border: 0;
         box-shadow: inset 0 12px 12px -12px rgba(0, 0, 0, 0.5);
       }
     `}</style>
     <Link href="/">
       <a className="first-a-tag">Home</a>
     </Link>
     &nbsp; &nbsp;
     <Link href="/about">
       <a>About</a>
     </Link>
     &nbsp; &nbsp;
     <Link href="/signUpPage">
       <a>Sign-Up</a>
     </Link>
     &nbsp; &nbsp;
     <Link href="/signInPage">
     <a>Log In</a>
     </Link>
     &nbsp; &nbsp;
     <Link href="/logOutPage">
       <a>Log Out</a>
     </Link>
     <hr/>

    </div>
  );
}

export default Header;

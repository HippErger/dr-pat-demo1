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

    </div>
  );
}

export default Header;

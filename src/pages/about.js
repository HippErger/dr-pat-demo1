import React from 'react';
import Link from 'next/link';

function AboutPage() {
  return (
    <div>
      <h1>
        About page
      </h1>
      <br /> <br />
      <h3>
        This is designed to make getting in and out of the dcotors office more faster.
        Providing information means less wait time in the office. Fill out the form
        and it will go directly to the office so you do not have to fill it out there.
        This allows for the office to stay on schedule. Thank you for your time.
      </h3>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </div>
  );
}


export default AboutPage;

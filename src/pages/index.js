import React from 'react';
import Header from '../components/Header';
import Link from 'next/link';

function IndexPage() {

  const titleName = 'QuickDocs';
  return (
    <div>
      <Header />
      <div className="container">
        <div className="title">
          <img className='redCrossPic' src='../static/redcross.jpg' alt="Red-Cross" />
          <h1 className="welcome">
             Welcome to, {titleName}
          </h1>
          <img className='redCrossPic1' src='../static/redcross.jpg' alt="Red-Cross" />
          </div>



        <div className='front-info'>
          <img className='dr-pat-front' src='../static/dr-pat-front.jpeg' alt="medical-form-pic" />

          <p className="description">
            At {titleName} we are committed your privacy, security and ease
            of access to quality healthcare. Start by selecting a doctor or creating a profile.
          </p>

          <Link className="createProfileLink" href="/patientSignUpForm">
            <button className="profileButton">
              <span>Create Profile</span>
            </button>
          </Link>
        </div>
      </div>
      <div className='picture-div'></div>




      <style jsx>{`
        @media only screen and (min-width : 321px) and (max-width: 511px)  {

          .container {
            background-color: white;
            justify-content: flex-start;
            }

          .dr-pat-front {
            grid-area: pic;
            width: 100%;

          }



          .welcome {
            font-family: arial;
            font-weight: bold;
            font-size: 24px;
            grid-area: welcome;
            text-align: center;

          }

          .redCrossPic {
            max-width: 75px;
            grid-area: redCrossPic
            margin: auto;
            display: block;

          }

          .redCrossPic1 {
            max-width: 75px;
            grid-area: redCrossPic1
            justify-self: start;
            margin: auto;
            display: block;

          }

          .front-info {
            grid-area: front-info
            justify-self: center;
          }

          .profileButton {

          border-radius: 4px;
          background-color: #f4511e;
          border: none;
          color: #FFFFFF;
          text-align: center;
          font-size: 10px;
          padding: 5px;
          width: 50%;
          transition: all 0.5s;
          cursor: pointer;
          margin: auto;
          display: block;

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
        button:hover {
          color: #f4511e;
          background-color: #33FFFF;

        }
        button:hover span {
          padding-right: 25px;
        }
        button:hover span:after {
          opacity: 1;
          right: 0;
        }
        }



        @media only screen and (min-width : 512px) and (max-width: 767px) {

          .dr-pat-front {
            grid-area: pic;
            width: 100%;

          }

          .title {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-areas:
              'redCrossPic welcome redCrossPic1';
            margin-bottom: 10px;
          }


          .welcome {
            font-family: arial;
            font-weight: bold;
            font-size: 24px;
            grid-area: welcome;
            text-align: center;

          }

          .redCrossPic {
            max-width: 75px;
            grid-area: redCrossPic;
            margin: auto;
            diaplay: block;


          }

          .redCrossPic1 {
            max-width: 75px;
            grid-area: redCrossPic1;
            margin: auto;
            diaplay: block;
          }

          .front-info {
            grid-area: front-info
            justify-self: center;
          }


          .profileButton {

          border-radius: 4px;
          background-color: #f4511e;
          border: none;
          color: #FFFFFF;
          text-align: center;
          font-size: 10px;
          padding: 5px;
          width: 50%;
          transition: all 0.5s;
          cursor: pointer;
          margin: auto;
          display: block;

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
        button:hover {
          color: #f4511e;
          background-color: #33FFFF;

        }
        button:hover span {
          padding-right: 25px;
        }
        button:hover span:after {
          opacity: 1;
          right: 0;
        }




        }






        @media only screen and (min-width : 768px) {

          .dr-pat-front {
            grid-area: pic;
            width: 100%;

          }

          .title {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-areas:
              'redCrossPic welcome redCrossPic1';
            margin-bottom: 10px;
          }




          .welcome {
            font-family: arial;
            font-weight: bold;
            font-size: 24px;
            grid-area: welcome;
            text-align: center;

          }

          .redCrossPic {
            max-width: 75px;
            grid-area: redCrossPic;
            margin: auto;
            diaplay: block;


          }

          .redCrossPic1 {
            max-width: 75px;
            grid-area: redCrossPic1;
            margin: auto;
            diaplay: block;
          }

          // .front-info {
          //   display: grid;
          //   grid-template-columns: 4fr 1fr ;
          //   grid-template-rows: 4fr 1fr;
          //   grid-template-areas:
          //   "pic description"
          //
          // }

          .description {
            text-align: center;
          }


          .profileButton {

          border-radius: 4px;
          background-color: #f4511e;
          border: none;
          color: #FFFFFF;
          text-align: center;
          font-size: 10px;
          padding: 5px;
          width: 50%;
          transition: all 0.5s;
          cursor: pointer;
          margin: auto;
          display: block;
          grid-area: profileButton;

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
        button:hover {
          color: #f4511e;
          background-color: #33FFFF;

        }
        button:hover span {
          padding-right: 25px;
        }
        button:hover span:after {
          opacity: 1;
          right: 0;
        }



        }


      `}</style>
    </div>
  );

}

export default IndexPage;

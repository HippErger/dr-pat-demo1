import React from 'react';
import Link from 'next/link';

function Header() {
  return (
  <div className='navBar'>

    <Link className='navbar-logo' href="/index">

      <img src='/static/img/SF22.png' />

    </Link>
    <div className='navbar-Links'>
      <Link className='navbar-home' href="/index">
        <a>Home</a>
      </Link>
      <Link className='navbar-contact' href="/contact">
        <a>Contact</a>
      </Link>
      <Link className='navbar-resume' href="/resume">
        <a>Resume</a>
      </Link>
      <Link className='navbar-photos' href="/photos">
        <a>Photos</a>
      </Link>
    </div>



    <style jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Quicksand');
      @import url('https://fonts.googleapis.com/css?family=EB+Garamond|Quicksand');

      @media only screen and (min-width : 321px) and (max-width : 767px)  {
        @font-face {
            font-family: 'EB Garamond', serif;
          src: url('../static/fonts/ebgaramond/EBGaramond-Regular.ttf') format('truetype')
        }

        a {
          text-align: center;
          align-self: center;
          text-decoration: none;
        }

        .navBar {
          list-style-type: none;
          text-decoration: none;
          background-color: white;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 2fr 1fr ;
          grid-template-areas:
            'logo'
            'navBar-Links';
          align-self: center;
          font-family: 'EB Garamond', serif;
          grid-gap: 5px 5px;

        }

        .navbar-Links {
          // grid-area: navBarLinks;
          display: grid;
          grid-template-rows: 1fr ;
          grid-template-columns: repeat(4, 1fr) ;
          grid-template-areas:
          'home portfolio contact resume photos';
          grid-gap: 5px 5px;
          align-self: center;

        }

        .navbar-logo {
          grid-area: logo;
          display: inline;
          text-decoration: none;
          align-self: center;
        }

        .navbar-home {
          grid-area: home;
          display: inline;
          text-decoration: none;


        }

        .navbar-portfolio {
          grid-area: portfolio;
          display: inline;
          text-decoration: none;

        }

        .navbar-contact {
          grid-area: contact;
          display: inline;
          text-decoration: none;

        }

        .navbar-resume {
          grid-area: resume;
          display: inline;
          text-decoration: none;

        }

        .navbar-photos {
          grid-area: photos;
          display: inline;
          text-decoration: none;


        }
      }



    @media only screen and (min-width: 768px) {
      @font-face {
          font-family: 'EB Garamond', serif;
        src: url('../static/fonts/ebgaramond/EBGaramond-Regular.ttf') format('truetype')
      }

      a {
        text-align: center;
        align-self: center;
        text-decoration: none;
      }

      .navBar {
        list-style-type: none;
        text-decoration: none;
        background-color: white;
        display: grid;
        grid-template-columns: 4fr  4fr ;
        grid-template-rows:  1fr  ;
        grid-template-areas:
        'logo   navbar-Links';
        grid-gap: 5px 10px;
        font-family: 'EB Garamond', serif;

  }


      .navbar-logo {
        grid-area: logo;
        display: inline;
        margin: 10px;
        text-decoration: none;
        align-self: center;


      }

      .navbar-Links {
        display: grid;
        grid-template-rows: repeat(5, 1fr) ;
        grid-template-areas:
        'home portfolio contact resume photos';
        grid-gap: 5px 25px;
        margin-bottom: -25px;
        padding-bottom: 0px;
        align-self: center;
        margin-top: 25px;
      }

      .navbar-home {
        grid-area: home;
        display: inline;
        text-decoration: none;
        align-self: center;

      }

      .navbar-portfolio {
        grid-area: portfolio;
        display: inline;
        text-decoration: none;

      }

      .navbar-contact {
        grid-area: contact;
        display: inline;
        text-decoration: none;

      }

      .navbar-resume {
        grid-area: resume;
        display: inline;
        text-decoration: none;

      }

      .navbar-photos {
        grid-area: home;
        display: inline;
        text-decoration: none;
        align-self: center;

      }

    }


  `}</style>


  </div>
  );
}

export default Header;

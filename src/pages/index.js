import React from 'react';
// import Link from 'next/link';
import Header from '../components/Header';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../services/store';







function IndexPage() {

  return (
    <div className='firstPage'>
      <div className='home'>
        <div className='frontPageText'>
          <h1>
            Scott Foster
          </h1>
          <h3>
            Project Manager
          </h3>
          <h5>
            Ability to motivate team memebers to accomplish the established goals
          </h5>
          <h5>
            Excels at relationship building
          </h5>
          <h5>
            Ensuring return on investment
          </h5>
          <h4>
            Computer stuff I know
          </h4>
          <h5>
            HTML, CSS, JavaScript, React, Redux
          </h5>
          <h5>
            Next, Node, MongoDB, Mongoose
          </h5>
          <h5>
            Express, Atom, VS Code
          </h5>
          <h4>
            Things I do for fun
          </h4>
          <h5>
            Cooking, Eating, Photography
          </h5>
        </div>
      </div>

        <style jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Quicksand');
          @import url('https://fonts.googleapis.com/css?family=EB+Garamond|Quicksand');

          @media only screen and (min-width : 321px) and (max-width: 511px)  {
            @font-face {
              font-family: 'EB Garamond', serif;
              src: url('../static/fonts/ebgaramond/EBGaramond-Regular.ttf') format('truetype')
            }

            @font-face {
            font-family: 'Quicksand', sans-serif;
              src: url('../static/fonts/quicksand/Quicksand-Regular.ttf') format('truetype')
            }


            h1 {
              font-size: 24px;
              font-family: 'EB Garamond', serif;

            }

            h3 {
              font-family: 'EB Garamond', serif;
            }

            h4 {
              font-family: 'EB Garamond', serif;
            }

            h5 {
              margin-left: 10px;
              font-family: 'EB Garamond', serif;
            }

            .firstPage {
              background-image: url(/static/img/binoculars-fog-foggy.jpg)
            }

            .home {
              list-style-type: none;
              text-decoration: none;
              background-color: white;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr 2fr;
              grid-template-areas:
               'pic' 'text'
              grid-gap: 0px 5px;
              justify-content: flex-start;
            }

            .frontPagePic {
              grid-area: pic;
              width: 100%
              //height: 100%;
            }

            .frontPageText {
              grid-area: text;
              display: inline;
              text-align: left;
              margin-left: 1em;
            }
          }


          @media only screen and (min-width : 512px) and (max-width: 767px) {
            body {
              margin: 0;
            }

            @font-face {
              font-family: 'EB Garamond', serif;
              src: url('../static/fonts/ebgaramond/EBGaramond-Regular.ttf') format('truetype')
            }

            @font-face {
              font-family: 'Quicksand', sans-serif;
              src: url('../static/fonts/quicksand/Quicksand-Regular.ttf') format('truetype')
            }

            h1 {
              font-size: 36px;
              font-family: 'EB Garamond', serif;
            }

            h3 {
              font-family: 'EB Garamond', serif;
            }

            h4 {
              font-family: 'EB Garamond', serif;
            }

            h5 {
              margin-left: 10px;
              font-family: 'EB Garamond', serif;
            }

            .firstPage {
              background-image: url(/static/img/binoculars-fog-foggy.jpg)
            }

            .home {
              list-style-type: none;
              text-decoration: none;
              margin: 0;
              padding: 0em;
              background-color: white;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows:  1 fr;
              grid-template-areas:
                'text'
              grid-gap: 5px 10px;
              justify-content: flex-start;
              // background-image: url(/static/img/compypic.jpeg);
              background-size: 100% 100%;
              }

            .frontPagePic {
              grid-area: pic;
              width: 100%;
              display: none;
            }

            .frontPageText {
              grid-area: text;
              display: inline;
              text-align: left;
              margin-left: 1em;
            }
          }






          @media only screen and (min-width : 768px) {
            @font-face {
              font-family: 'ebgaramond';
              src: url('../static/fonts/ebgaramond/EBGaramond-Regular.ttf') format('truetype')
            }

            @font-face {
              font-family: 'Quicksand', sans-serif;
              src: url('../static/fonts/quicksand/Quicksand-Regular.ttf') format('truetype')
            }

            h1 {
              margin-left: 10px;
              font-size: 36px;
              font-family: 'EB Garamond', serif;

            }

            h3 {
              margin-left: 10px;
              font-family: 'EB Garamond', serif;
            }

            h4 {
              margin-left: 10px;
              font-family: 'EB Garamond', serif;
            }

            h5 {
              margin-left: 20px;
              font-family: 'EB Garamond', serif;
            }

            .firstPage {
              background-image: url(/static/img/binoculars-fog-foggy-1136815.jpg)
              background-size: 100% 100%;
              margin-top: 50px;
            }

            .home {
              list-style-type: none;
              text-decoration: none;
              // background-image: url(/static/img/compypic.jpeg);
              // background-size: 100% ;
              padding: 0px;
              marging: 0px;
              }


            .frontPageText {
              display: inline;
              text-align: left;
              margin-left: 10px;
            }

          }
      `}</style>

    </div>
  );
}


// null will be mapdispatchtoprops and mapstatetoprops
export default withRedux(initStore, null, null)(IndexPage);

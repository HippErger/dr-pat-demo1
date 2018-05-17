import React from 'react';
// import Link from 'next/link';
import Header from '../components/Header';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../store';






function IndexPage() {

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className='home'>
        <img className='frontPagePic' src='/static/img/compypic.jpeg' alt='no pics today' />
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


          @media only screen and (min-width : 321px) and (max-width: 511px)  {
            @font-face {
              font-family: 'ebgaramond';
              src: url('../static/fonts/ebgaramond/EBGaramond-Regular.ttf') format('truetype')
            }

            @font-face {
              font-family: 'quicksand';
              src: url('../static/fonts/quicksand/Quicksand-Regular.ttf') format('truetype')
            }


            h1 {
              font-size: 24px;
              font-family: ebgaramond;

            }

            h3 {
              font-family: quicksand;
            }

            h4 {
              font-family: ebgaramond;
            }

            h5 {
              margin-left: 10px;
              font-family: quicksand;
            }

            .home {
              list-style-type: none;
              text-decoration: none;
              background-color: white;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: repeat(2, 1fr);
              grid-template-areas:
                'pic'
                'text'
              grid-gap: 5px 10px;
              justify-content: flex-start;
              }

            .frontPagePic {
              grid-area: pic;
              width: 100%;
              display: inline;
            }

            .frontPageText {
              grid-area: text;
              display: inline;
              text-align: left;
              margin-left: 1em;
              margin-top: 17em;

            }
          }







          @media only screen and (min-width : 512px) and (max-width: 767px) {
            @font-face {
              font-family: 'ebgaramond';
              src: url('../static/fonts/ebgaramond/EBGaramond-Regular.ttf') format('truetype')
            }

            @font-face {
              font-family: 'quicksand';
              src: url('../static/fonts/quicksand/Quicksand-Regular.ttf') format('truetype')
            }


            h1 {
              font-size: 36px;
              font-family: ebgaramond;

            }

            h3 {
              font-family: quicksand;
            }

            h4 {
              font-family: ebgaramond;
            }

            h5 {
              margin-left: 10px;
              font-family: quicksand;
            }

            .home {
              list-style-type: none;
              text-decoration: none;
              margin: 0;
              padding: 0em;
              background-color: white;
              display: grid;
              grid-template-columns: 2fr 2fr ;
              grid-template-rows: 2fr;
              grid-template-areas:
                'pic text'

              grid-gap: 5px 10px;
              justify-content: flex-start;
              }

            .frontPagePic {
              grid-area: pic;
              width: 100%;
              display: inline;
            }

            .frontPageText {
              grid-area: text;
              display: inline;
              text-align: left;
              margin-left: 1em;
              margin-top: 30em;
            }

          }






          @media only screen and (min-width : 768px) {
            @font-face {
              font-family: 'ebgaramond';
              src: url('../static/fonts/ebgaramond/EBGaramond-Regular.ttf') format('truetype')
            }

            @font-face {
              font-family: 'quicksand';
              src: url('../static/fonts/quicksand/Quicksand-Regular.ttf') format('truetype')
            }


            h1 {
              font-size: 36px;
              font-family: ebgaramond;

            }

            h3 {
              font-family: quicksand;
            }

            h4 {
              font-family: ebgaramond;
            }

            h5 {
              margin-left: 10px;
              font-family: quicksand;
            }

            .home {
              list-style-type: none;
              text-decoration: none;
              margin: 0;
              padding: 0em;
              background-color: white;
              display: grid;
              grid-template-columns: 2fr;
              grid-template-rows: 2fr 2fr;
              grid-template-areas:
                'pic'
                'text'

              grid-gap: 5px 10px;
              justify-content: flex-start;
              }

            .frontPagePic {
              grid-area: pic;
              width: 100%;
              display: inline;
            }

            .frontPageText {
              grid-area: text;
              display: inline;
              text-align: left;
              margin-left: 5em;
              margin-top: 7em

            }

          }
      `}</style>

    </div>
  );
}


// null will be mapdispatchtoprops and mapstatetoprops
export default withRedux(initStore, null, null)(IndexPage);

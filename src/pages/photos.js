import React from 'react';
import Header from '../components/Header';




function Photo() {

  return (
    <div>
      <Header />
      <h2>
        Take a break look at some pictures.
      </h2>
      <ul>
        <li><img className='photos' src='/static/photopage/DSCF9344.jpg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF9331.jpg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF9321.jpg' alt='flower pic'/></li>

        <li><img className='photos' src='/static/photopage/DSCF0554.jpg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF0564.jpg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF0658.jpg' alt='flower pic'/></li>

        <li><img className='photos' src='/static/photopage/DSCF0662.jpg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF0711.jpg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF0714.jpg' alt='flower pic'/></li>

        <li><img className='photos' src='/static/photopage/DSCF0716.jpg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF0721.jpg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF0723.jpg' alt='flower pic'/></li>

        <li><img className='photos' src='/static/photopage/DSCF0732.jpg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF0784.jpg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF0938.jpg' alt='flower pic'/></li>

        <li><img className='photos' src='/static/photopage/DSCF2640.jpg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF4187.jpg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF6217.jpg' alt='flower pic'/></li>

        <li><img className='photos' src='/static/photopage/DSCF6228.jpg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF6258.jpg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF6267.jpg' alt='flower pic'/></li>

        <li><img className='photos' src='/static/photopage/DSCF6293.jpg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF6385.jpg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF6633.jpg' alt='flower pic'/></li>

        <li><img className='photos' src='/static/photopage/DSCF6677.jpg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF6940.jpg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF7062.jpg' alt='flower pic'/></li>

        <li><img className='photos' src='/static/photopage/DSCF7067.jpg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF7170.jpg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF7183.jpg' alt='flower pic'/></li>

        <li><img className='photos' src='/static/photopage/DSCF7186.jpg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF7228.jpg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF7507.jpg' alt='flower pic'/></li>

        <li><img className='photos' src='/static/photopage/DSCF7543.jpg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF8184.jpg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF8365.jpg' alt='flower pic'/></li>

        <li><img className='photos' src='/static/photopage/DSCF8430.jpg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF8579.jpg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF8596.jpg' alt='flower pic'/></li>

        <li><img className='photos' src='/static/photopage/DSCF8666.jpg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF8710.jpg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF8734.jpg' alt='flower pic'/></li>

        <li><img className='photos' src='/static/photopage/DSCF8741.jpg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF8910.jpg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF9011.jpg' alt='flower pic'/></li>

        <li><img className='photos' src='/static/photopage/DSCF9157.jpg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF9181.jpg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF9541.jpg' alt='flower pic'/></li>

      </ul>





      <style jsx> {`

        @font-face {
          font-family: 'ebgaramond';
          src: url('../static/fonts/ebgaramond/EBGaramond-Regular.ttf') format('truetype')
        }

        ul {
          list-style-type: none;
          text-decoration: none;
          margin: 0;
          padding: 0em;
          background-color: white;
          display: grid;
          grid-template-columns:  2fr 2fr 2fr ;
          grid-template-rows:  1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
          grid-template-areas:
          'photo photo photo';
          grid-gap: 10px 10px;
          align-self: center;
        }

        h2 {
          font-family: ebgaramond;
          text-align: center;
        }

        li {
          list-style-type: none;

        }

        .photos {
          grid-area: photo;
          width: 100%;
          height: 100%;

        }


        `}
        </style >
    </div>
  );
}

export default Photo;

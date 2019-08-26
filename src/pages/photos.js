import React from 'react';
import Header from '../components/Header';




function Photo() {

  return (
    <div>
      
      <h2>
        Take a break look at some pictures.
      </h2>
      <ul>
        <li><img className='photos' src='/static/photopage/DSCF9344.jpeg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF9331.jpg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF9321.jpeg' alt='flower pic'/></li>

        <li><img className='photos' src='/static/photopage/DSCF9296.jpeg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF9295.jpeg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF9294.jpeg' alt='flower pic'/></li>

        <li><img className='photos' src='/static/photopage/DSCF9293.jpeg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF9286.jpeg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF9285.jpeg' alt='flower pic'/></li>

        <li><img className='photos' src='/static/photopage/DSCF9284.jpeg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF9282.jpeg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF9281.jpeg' alt='flower pic'/></li>

        <li><img className='photos' src='/static/photopage/DSCF9278.jpeg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF9276.jpeg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF9277.jpg' alt='flower pic'/></li>

        <li><img className='photos' src='/static/photopage/DSCF9275.jpeg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF9274.jpeg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF9225.jpeg' alt='flower pic'/></li>

        <li><img className='photos' src='/static/photopage/DSCF9218.jpeg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF9162.jpeg' alt='flower pic'/></li>
        <li><img className='photos' src='/static/photopage/DSCF9160.jpeg' alt='flower pic'/></li>



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
          grid-template-columns:  2fr 2fr 2fr;
          // grid-template-rows:  100%;
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

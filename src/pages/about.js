import React from 'react';
import Header from '../components/Header';
import ListOfUsers from '../components/ListOfUsers';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../store';




function AboutPage() {

  return (
    <div>
      <Header />
      <h1>
        About page
      </h1>
      <ListOfUsers />
    </div>
  );
}

export default withRedux(initStore, null, null)(AboutPage);

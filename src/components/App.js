import React from 'react';

import Header from './Header';
import AddContact from './AddContact';
import VisibleContactList from './VisibleContactList';
import Footer from './Footer';

import './App.css';

const App = ({ match }) => (
  <div className="App">
      <Header />
      <AddContact />
      <VisibleContactList filter={match.params.filter || 'all'}/>
      <Footer />
  </div>
);

export default App;
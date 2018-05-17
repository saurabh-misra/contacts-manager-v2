import React from 'react';

import Header from './Header';
import AddContact from './AddContact';
import VisibleContactList from './VisibleContactList';
import Footer from './Footer';

import './App.css';

const App = () => (
  <div className="App">
      <Header />
      <AddContact />
      <VisibleContactList />
      <Footer />
  </div>
);

export default App;
import React, { Component } from 'react';

import './App.css';
import Layout from './components/Layout/Layout';
import CompareBuilder from './containers/CompareBuilder/CompareBuilder';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <CompareBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;

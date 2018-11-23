import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import Map from '../Map/Map';
import List from '../List/List';

class App extends Component {
  render() {
    return (
        <div>
            <Nav />
            <div className="container centerDiv">
                <div className="row">
                    <div className="col-md-10">
                        <Map />
                    </div>
                    <div className="col-md-2">
                        <List />
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './style.css';
import Header from './Header';
import Display from './Display';
import Footer from './Footer';
class App extends Component {
  state = {
    show: false,
    inputs: [],
  };
  inputSubmit = (input) => {
    this.setState({
      inputs: [...this.state.inputs, { name: input }],
      show: false,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="header container p-5">
          <h3>THINGS TO DO</h3>
          {this.state.show ? <Header inputSubmit={this.inputSubmit} /> : null}
        </div>
        {/* <Display inputs={this.state.inputs} /> */}
        <Footer show={() => this.setState({ show: true })} />
      </div>
    );
  }
}

export default App;

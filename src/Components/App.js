import React, { Component } from 'react';
import './style.css';
import Header from './Header';
import DisplayItems from './DisplayItems';
import Footer from './Footer';
class App extends Component {
  state = {
    show: false,
    inputs: [
      // {
      //   name: 'felna',
      //   selected: false,
      // },
    ],
    // ['abc'],
  };
  inputSubmit = (input) => {
    this.setState({
      inputs: [...this.state.inputs, { name: input, selected: false }],
      show: false,
    });
  };
  showCheck = (input, index) => {
    // this.state.inputs[index].selected = input.target.checked;

    this.setState({
      inputs: this.state.inputs.map((obj, indexPos) => {
        return {
          ...obj,
          selected: indexPos === index ? input.target.checked : obj.selected,
        };
      }),
    });

    // debugger;
    // this.setState({

    //   inputs: [...this.state.inputs, { name: input, selected: true }],

    //   show: false,
    // })
  };
  render() {
    console.log(this.state);
    return (
      <div className="container">
        <div className="header container p-5">
          <h3>THINGS TO DO</h3>
          {this.state.show ? <Header inputSubmit={this.inputSubmit} /> : null}
        </div>
        <DisplayItems
          inputs={this.state.inputs}
          inputSubmit={this.inputSubmit}
          showCheck={this.showCheck}
        />
        <Footer show={() => this.setState({ show: true })} />
      </div>
    );
  }
}

export default App;

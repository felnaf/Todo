import React, { Component } from 'react';

class Header extends Component {
  state = {
    input: '',
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.inputSubmit(this.state.input);
  };

  render() {
    console.log(this.state);
    return (
      <div className=" container p-5">
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Add New"
            value={this.state.input}
            onChange={(e) => this.setState({ input: e.target.value })}
          ></input>
        </form>
      </div>
    );
  }
}

export default Header;

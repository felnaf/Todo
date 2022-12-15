import React, { Component } from 'react';

class Header extends Component {
  state = {
    input: '',
  };
  componentDidMount() {
    if (this.props.editElement) {
      this.setState({ input: this.props.editElement.name });
    }
  }
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.inputSubmit(
      this.state.input,
      this.props.editElement ? true : false
    );
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

import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className=" container">
          <button
            type="button"
            className="btn btn-light add"
            onClick={this.props.show}
          >
            Add
          </button>
          <div className="activity">
            <button
              type="button"
              className="btn btn-light"
              onClick={() => this.props.onFilterSelect('All')}
            >
              All
            </button>
            <button
              type="button"
              className="btn btn-light"
              onClick={() => this.props.onFilterSelect('Active')}
            >
              Active
            </button>
            <button
              type="button"
              className="btn btn-light"
              onClick={() => this.props.onFilterSelect('completed')}
            >
              Completed
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

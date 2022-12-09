import React, { Component } from 'react';

class DisplayItems extends Component {
  checked = (e, index) => {
    this.props.showCheck(e, index);
  };
  render() {
    const items = this.props.inputs.map((listItem, index) => {
      // debugger
      // console.log(thi)
      return (
        <div className="display container" key={index}>
          <input
            type="checkbox"
            onChange={(e) => this.checked(e, index)}
            checked={listItem.selected === true}
          ></input>
          <label>{listItem.name}</label>
        </div>
      );
    });
    return <div>{items}</div>;
  }
}
// <div>
// {
/* {item.map((a, index) => (
          <div key={index}>
            <input type="checkbox"></input>
            <label>{a.name}</label>
          </div>
        ))} */
// }
// </div>
// );
// }
// }
export default DisplayItems;

import React, { Component } from 'react';
import './style.css';

class DisplayItems extends Component {
  checked = (e, index) => {
    this.props.showCheck(e, index);
  };

  // clicked = (e, index) => {
  //   this.props.Edit(e, index);
  // };
  // delete = (a) => {
  //   this.a.remove();
  // };
  render() {
    // console.log(this.props.filterSelected);
    console.log(this.props.inputs);
    let items = this.props.inputs;
    if (this.props.filterSelected === 'Active') {
      items = this.props.inputs.filter(({ selected }) => selected === false);
    }

    if (this.props.filterSelected === 'completed') {
      items = this.props.inputs.filter(({ selected }) => selected === true);
    }
    console.log(items);
    let data = items.map((listItem, index) => {
      // debugger
      // console.log(thi)
      return (
        <div className="display container" key={index}>
          <input
            type="checkbox"
            onChange={(e) => this.checked(e, index)}
            checked={listItem.selected === true}
          ></input>
          <label className={listItem.selected ? 'strike' : ''}>
            {listItem.name}
          </label>
          {/* :<label>{listItem.name}</label>  */}
          <div className="edit-delete">
            <button
              type="button"
              className="btn btn-light "
              onClick={() => this.props.Edit(index)}
              // onClick ={()=> this.props.Edit(listItem.name)}
              // value={listItem.isEditMode === true}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-danger "
              onClick={() => this.props.onDelete(index)}
            >
              Delete
            </button>
          </div>
        </div>
      );
    });
    return <div className="display-data">{data}</div>;
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

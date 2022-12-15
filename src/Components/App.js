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
    filterSelected: 'All',
    // ['abc'],
  };
  inputSubmit = (input, isEditMode) => {
    if (!isEditMode) {
      this.setState({
        inputs: [
          ...this.state.inputs,
          { name: input, selected: false, isEditMode: false },
        ],
        show: false,
      });
    } else {
      this.setState({
        inputs: this.state.inputs.map((e) => {
          return {
            ...e,
            name: e.isEditMode ? input : e.name,
            isEditMode: false,
          };
        }),
        show: false,
      });
    }
  };
  showCheck = (input, index) => {
    // this.state.inputs[index].selected = input.target.checked;
    console.log(index);
    this.setState({
      inputs: this.state.inputs.map((obj, indexPos) => {
        // console.log(indexPos)
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

  // Edit = (data) => {
  //   this.setState({
  //     inputs: this.state.inputs.map((a) => {
  //       return {
  //         ...a,
  //         name: data.isEditMode ? e : data.name,
  //         isEditMode: false,
  //       };
  //     }),
  //   });
  // };

  Edit = (ind) => {
    // console.log(input);
    this.setState({
      inputs: this.state.inputs.map((data, index) => {
        return {
          ...data,
          isEditMode: index === ind ? true : data.isEditMode,
          // isEditMode: (data.isEditMode = false),

          // isEditMode:
          //   index === ind ? (data.isEditMode = true) : data.isEditMode,
        };
      }),

      // show: true, //no need
      // let filtered = []
      // inputs:this.state.inputs.filter((data)=>data.isEditMode === true)
    });
  };

  onDelete = (e) => {
    // let data = [...this.state.inputs];
    this.setState({
      inputs: this.state.inputs.filter((listItem, index) => index !== e),
    });
  };

  render() {
    console.log(this.state.inputs);
    //Add mode
    //this.state.show

    //Edit mode
    const isEditing =
      this.state.inputs.filter(({ isEditMode }) => isEditMode).length > 0;
    // console.log(isEditing);
    const editElement = !isEditing
      ? null
      : this.state.inputs.find(({ isEditMode }) => isEditMode);
    return (
      <div className="container">
        <div className="header container p-5">
          <h3>THINGS TO DO</h3>
          {this.state.show || isEditing ? (
            <Header inputSubmit={this.inputSubmit} editElement={editElement} />
          ) : null}
        </div>
        <DisplayItems
          inputs={this.state.inputs}
          inputSubmit={this.inputSubmit}
          showCheck={this.showCheck}
          filterSelected={this.state.filterSelected}
          onDelete={this.onDelete}
          Edit={this.Edit}
        />
        <Footer
          show={() => this.setState({ show: true })}
          filterSelected={this.state.filterSelected}
          onFilterSelect={(filter) => this.setState({ filterSelected: filter })}
        />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

class Module extends Component {
  constructor(props){
    super(props);  
    this.state = {
      isChecked: false,
      name: this.props.name,
      button: "",
      active: ""
    }
  }
  
  toggleChange(){
    let name = this.props.name;


    this.setState({
      isChecked: !this.state.isChecked,
    });
    if(!this.state.isChecked){
      this.setState({name: '“Vous avez choisi: '+ name +' , voici la cote pour placer un pari!”', button: this.props.button, active: "label"})
    }else{
      this.setState({name : name, button: "", active: ""})
    }
  }
  
  render() {
   // console.log(this.props.name, this.state.isChecked)
   this.props.callback(this.state)
   
    return (
      <div>
        <label className={this.state.active}>
          <input type="checkbox" checked={this.state.isChecked} onChange={this.toggleChange.bind(this)} ></input>
          { this.state.name } {this.state.button}
        </label>
      </div>
    );
   
  }
}

export default Module;

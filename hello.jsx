import React from 'react';
import ReactDOM from 'react-dom'; // so we can mount into the DOM using render
class Hello extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'World'
    };
  }

  handleChange(event) {
    console.log(event.target);
    this.setState({name: event.target.value});
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.state.name}</h1>
        <input type="text" onChange={(e) => this.handleChange(e)}/>
      </div>

    )
  }
}
ReactDOM.render(
  <Hello/>, document.getElementById('hello'));
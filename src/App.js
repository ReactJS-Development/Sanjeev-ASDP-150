import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {firstName:"",lastName:""};

  }

  showName = () =>  {
    console.log(this.refs.firstname.value);
    this.setState({firstName:this.refs.firstname.value,lastName:this.refs.lastname.value});
  }

    render() {
      return (
        <div className="App">
          FirstName:<input type="text" ref="firstname" />
          LastName: <input type="text" ref="lastname" />
          <button onClick={this.showName}>Show Name</button>
          <br/>
           Hi {this.state.firstName} {this.state.lastName}!!!!!!!!!
        </div>
    );
  }
}

export default App;

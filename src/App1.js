import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App1 extends Component {
  constructor(props){
    super(props);
    this.state= {firstName:"",lastName:""};

  }

  firstNameHandler = (event) =>{
    this.setState({firstName:event.target.value})
  }

  lastNameHandler = (event) =>{
    this.setState({lastName:event.target.value})
  }

    render() {
      return (
        <div className="App">
          FirstName:<input type="text" onChange={this.firstNameHandler} />
          LastName: <input type="text" onChange={this.lastNameHandler} />
          <button onClick={this.showName}>Show Name</button>
          <br/>
           Hi {this.state.firstName} {this.state.lastName}!!!!!!!!!
        </div>
    );
  }
}

export default App1;

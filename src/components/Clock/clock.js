import React from 'react'; 
import { Component } from 'react';
import FormattedDate from '../FormattedDate/formattedDate';



class Clock extends Component {
    constructor(props){
      super(props);
      this.state = {date: new Date()};
    }
    
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <FormattedDate date={this.state.date} />
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

  export default Clock
  
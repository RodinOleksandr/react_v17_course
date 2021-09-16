import React from 'react';

class CounterClass extends React.Component{
  state = {
    clicks : 0
  }
  inc = (clicks) =>{
    this.setState({clicks : clicks + 1})
  }
  render() {
    let {clicks} = this.state;

    return (
        <span onClick = {this.inc.bind(this, clicks)}> {clicks}</span>
    )

  }
}
export default CounterClass;

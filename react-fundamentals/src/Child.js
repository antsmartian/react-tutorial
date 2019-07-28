import React from 'react';

export default class Child extends React.Component {
  componentWillMount() {
    console.log("componentWillMount child", this.props, this.state);
  }

  componentDidMount() {
  }

  render() {
    console.log("rendering child")
    return (
        <div>
          Child component
          <div ref="svg"></div> 
        </div>
      )
  }
}
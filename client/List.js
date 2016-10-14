import React from 'react';
import ReactDOM from 'react-dom';

export default class List extends React.Component {
   constructor(props) {
     super(props);
     this.state = {};
   }
  render() {
    return (
      <a href={this.props.url}>{this.props.url}</a>
    );
  }
}
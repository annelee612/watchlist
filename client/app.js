import React from 'react';
import ReactDOM from 'react-dom';

var CommentBox = React.createClass({
  constructor: function(props) {
    //super(props);
    state: {};
  },

  render: function() {
    return (
      <div className='commentBox'>
        <List url={this.props.url}/>
        <Friends names={this.props.name}/>
      </div>
    )
  }
})


ReactDOM.render(
  <CommentBox />,
  document.getElementById('root')
);

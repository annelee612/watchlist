import React from 'react';
import ReactDOM from 'react-dom';

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className='commentBox'>
        Commentbox.
      </div>
    )
  }
})


ReactDOM.render(
  <CommentBox />,
  document.getElementById('root')
);
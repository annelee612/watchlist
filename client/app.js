import React from 'react';
import ReactDOM from 'react-dom';

import List from './List.js';

var CommentBox = React.createClass({
  // constructor: function(props) {
  //   //super(props);
  //   state: {};
  // },

  render: function() {
    return (
      <div className='commentBox'>
        {this.props.urlList.map((d) => <List url={d.url} />)}
      </div>
    )
  }
})

var urlList = ['url1', 'url2']; //TODO: get these from db


ReactDOM.render(
  <CommentBox urlList={urlList}/>,
  document.getElementById('root')
);

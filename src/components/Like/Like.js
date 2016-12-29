import React from 'react';

import './Like.scss';

let likeId = 0;

class Like extends React.Component {
  render() {
    return (
      <div className="like">
        <input
          type="checkbox"
          id={`like-${++likeId}`} />
        <label htmlFor={`like-${likeId}`}>Like</label>
      </div>
    );
  }
}

export default Like;

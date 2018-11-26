import React from 'react';
import CommentsSvg from '../../Svg/CommentsSvg';

const Chat = () => (
  <li className="chat-button">
    <div className="wrap">
      <span className="nav-icon">
        <CommentsSvg />
      </span>
    </div>
  </li>
);

export default Chat;

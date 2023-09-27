import React, { useState, useEffect } from 'react';
import './Chat.css';

const Chat = ({ chatLogs }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(chatLogs);
  }, [chatLogs]);

  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, { username: 'You', text: inputValue }]);
    setInputValue('');
  };

  return (
    <div className="chat-container">
      <h2 className="chat-title">Global Chat</h2>
      <div className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className="chat-message">
            <span className="chat-username">{message.username}:</span>
            <span className="chat-text">{message.text}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="chat-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="chat-input"
          placeholder="Type your message..."
        />
        <button type="submit" className="chat-submit-button">Send</button>
      </form>
    </div>
  );
};

export default Chat;

import React, { useState } from 'react';
import './ChatInterface.css';

function ChatInterface({ match, onCloseClick }) {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { sender: 'Match', message: 'Hi there!' },
    { sender: 'You', message: 'Hello!' },
    // Add more chat history here
  ]);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() === '') return;

    const newMessage = { sender: 'You', message };
    setChatHistory([...chatHistory, newMessage]);
    setMessage('');
  };

  return (
    <div className="chat-popup">
      <div className="chat-header">
        <h3>Chat with {match.name}</h3>
        <button onClick={onCloseClick}>Close</button>
      </div>
      <div className="chat-messages">
        {chatHistory.map((chat, index) => (
          <div
            key={index}
            className={`chat-message ${chat.sender.toLowerCase()}`}
          >
            <span className="message-sender">{chat.sender}: </span>
            {chat.message}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={handleInputChange}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatInterface;

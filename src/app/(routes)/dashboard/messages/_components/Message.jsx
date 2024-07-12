"use client"; // Ensure this is at the top of the file

// src/components/Message.js
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import axios from 'axios'; // Import axios

// Connect to the Socket.io server
const socket = io('http://localhost:4000'); // Ensure this matches your backend server URL

const Message = ({ userId, receiverId, organizationId }) => {
  // State for managing the current message input and the list of messages
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [chatLoading, setChatLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
        
      try {
        setChatLoading(true);
        const response = await axios.get('http://localhost:4000/messages', {
          params: { user1: userId, user2: receiverId, organizationId }
        });
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
    setChatLoading(false);

    // Join the Message room when the component mounts
    socket.emit('join', { userId });
    console.log(`User ${userId} joined the room`);

    // Listen for incoming messages
    socket.on('receiveMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up the effect
    return () => {
      socket.off('receiveMessage');
    };
  }, [userId, receiverId]); // Add receiverId to dependencies

  // Function to handle sending a message
  const sendMessage = () => {
    if (message.trim()) { // Ensure the message is not just whitespace
      console.log('Sending message:', message);
      socket.emit('sendMessage', { sender: userId, receiver: receiverId, message, organizationId: organizationId });
      setMessages((prevMessages) => [...prevMessages, { sender: userId, receiver: receiverId, message, organizationId: organizationId }]);
      setMessage('');
    }
  };

  return (
    <div>
      <div>
        {chatLoading ? <div className='loader'></div> : messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.sender === userId ? userId : receiverId}:</strong> {msg.message}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Message;

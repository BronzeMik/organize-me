// src/App.js
import React from 'react';
import Message from '../../messages/_components/Message';
import MessagesContainer from './MessagesContainer';

function Page() {
  // For demonstration purposes, these IDs should be dynamically set
  const userId = {username: 'user1', id: '6674ccdfccd6a871d593c9a5'}; // Replace with actual user ID logic
  const receiverId = {username: 'user2', id: ''}; // Replace with actual receiver ID logic

  return (
    <div>
      {/* <Message userId={userId} receiverId={receiverId} organizationId={1}/> */}
      <MessagesContainer userId={userId} receiverId={receiverId} organizationId={1} />
    </div>
  );
}

export default Page;

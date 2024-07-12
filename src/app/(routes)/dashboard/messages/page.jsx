// src/App.js
import React from 'react';
import Message from './_components/Message';

function Page() {
  // For demonstration purposes, these IDs should be dynamically set
  const userId = 'user2'; // Replace with actual user ID logic
  const receiverId = 'user1'; // Replace with actual receiver ID logic

  return (
    <div>
      <h1>Chat Application</h1>
      <Message userId={userId} receiverId={receiverId} organizationId={1}/>
    </div>
  );
}

export default Page;

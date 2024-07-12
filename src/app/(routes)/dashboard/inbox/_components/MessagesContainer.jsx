"use client";

import { useState, useEffect } from "react";


import io from "socket.io-client";
import axios from "axios"; // Import axios
import { Input } from "@mui/material";
import { getChatConversations } from "@/src/lib/api";

function MessagesContainer({ userId, receiverId, organizationId }) {
  // Connect to the Socket.io server
  const socket = io("http://localhost:4000"); // Ensure this matches your backend server URL

  // State for managing the current message input and the list of messages
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [chatLoading, setChatLoading] = useState(true);
  const [conversations, setConversations] = useState([]);
  const username = userId.username;

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        setChatLoading(true);
        const response = await axios.get("http://localhost:4000/messages", {
          params: {
            user1: userId.username,
            user2: receiverId.username,
            organizationId,
          },
        });
        // setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    const fetchConversations = async () => {
      try {
        const response = await getChatConversations(
          organizationId,
          userId.username
        );

        setConversations(response.data);
        console.log(response.data);
      } catch (e) {
        console.error("Error retrieiving chats, try again");
      }
    };

    fetchMessages();
    fetchConversations();
    setChatLoading(false);

    // Join the Message room when the component mounts
    socket.emit("join", { username });
    console.log(`User ${userId.username} joined the room`);

    // Listen for incoming messages
    socket.on("receiveMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up the effect
    return () => {
      socket.off("receiveMessage");
    };
  }, [userId.username, receiverId.username]); // Add receiverId to dependencies

  // Function to handle sending a message
  const sendMessage = () => {
    if (message.trim()) {
      // Ensure the message is not just whitespace
      console.log("Sending message:", message);
      const newMessage = {
        sender: userId.id,
        receiver: receiverId.id,
        message,
        organizationId: organizationId,

      };

      socket.emit("sendMessage", newMessage);

      setMessages((prevMessages) => [...prevMessages, newMessage]);

      // Update the relevant conversation with the new message
      setConversations((prevConversations) => {
        const updatedConversations = prevConversations.map((convo) => {
          if (
            (convo.participants[0].username === userId.username &&
              convo.participants[1].username === receiverId.username) ||
            (convo.participants[1].username === userId.username &&
              convo.participants[0].username === receiverId.username)
          ) {
            return {
              ...convo,
              messages: [...convo.messages, newMessage],
            };
          }
          return convo;
        });
        return updatedConversations;
      });

      setMessage("");
    }
  };

  const changeMessages = (newMessages) => {
    setChatLoading(true);
    setMessages(newMessages);
    setChatLoading(false);
  };

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  return (
    <div className="min-h-[500px] border-2">
      <div className="grid grid-cols-5">
        {/* Side bar */}
        <div className="col-start-1 col-end-2 md:min-h-[400px] border-r-2">
          <Input placeholder="Search Chats.." />
          <ul>
            {conversations.map((convo, index) => (
              <li
                className="cursor-pointer border-b-2  border-b-slate-100 py-3 text-md text-black hover:bg-slate-200 px-3"
                style={{
                  fontSize: "14px",
                  fontWeight: "normal",
                  fontColor: "#000",
                }}
                key={index}
                onClick={() => {
                  changeMessages(convo.messages);
                }}
              >
                <div className="flex justify-between">
                  <b>
                    {convo.participants[0].username == userId.username
                      ? convo.participants[1].username
                      : convo.participants[0].username}
                  </b>{" "}
                  <p></p>
                </div>
                <h3>
                {convo.messages.length > 0
                    ? "Last message: " +
                      // Ensure `timestamp` exists before formatting it
                      (convo.messages[convo.messages.length - 1]?.timestamp
                        ? // If `timestamp` exists, format it to `YYYY-MM-DD`
                          new Date(
                            convo.messages[
                              convo.messages.length - 1
                            ].timestamp
                          )
                            .toISOString()
                            .slice(0, 10)
                        : // If `timestamp` does not exist, show "No timestamp"
                          "No timestamp")
                    : "Start conversation"}
                </h3>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-start-2 col-end-6 ">
          <div className="h-full w-full flex flex-col text-white max-h-[400px] overflow-y-auto">
            {chatLoading ? (
              <div className="loader"></div>
            ) : messages?.length > 0 ? (
              messages.map((msg, index) => (
                <div className="w-full flex px-5 max-h-[300px]" key={index}>
                  {msg?.sender == userId.id ? (
                    <div className="flex w-full justify-end">
                      <h2 className="bg-blue-400 w-[fit-content] px-3 py-2 rounded-2xl my-4">
                        {msg.message}
                      </h2>
                    </div>
                  ) : (
                    <div className="flex w-full justify-start">
                      <h2 className="bg-blue-700 w-[fit-content] px-3 py-2 rounded-2xl my-4">
                        {msg.message}
                      </h2>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <h2>Start conversaion...</h2>
            )}
          </div>
          <div className="w-full flex items-center ">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="w-[80%] border-2 rounded-2xl py-2 px-3 mx-2"
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessagesContainer;

'use client'
// SocketComponent.jsx
import io from 'socket.io-client';
import { useState, useEffect } from 'react';
let socket
export const SocketComponent = () => {
  const [connectedClients, setConnectedClients] = useState([]);

  useEffect(() => {
    const socketInitializer = async () => {
        await fetch('/api/socket')
        socket = io()
    
        socket.on('connect', () => {
          console.log('connected')
        })
      }
      socketInitializer()
    // return () => {
    //   socket.disconnect(); // Clean up: Disconnect from the server when the component unmounts
    // };
  }, []);

  return (
    <div>
      <h1>Connected Clients</h1>
      
    </div>
  );
};

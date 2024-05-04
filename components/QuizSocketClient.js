"use client";

import { useEffect, useState } from "react";
import { socket } from "@/utils/socket";
import { useSearchParams } from "next/navigation";

export function QuizSocketClient() {
  const searchParams = useSearchParams()
  console.log(searchParams.get('name'));

  useEffect(() => {
    socket.emit('userData', { name: searchParams.get('name') });
        socket.on('userList', (users) => {
            console.log('users', users);
        });

        socket.on('initialUserList', (users) => {
          console.log(users);
      });
        return () => {
            socket.disconnect(); 
        };
  }, []);

  return (
    <div>
      ass
    </div>
  );
}
"use client";

import { io } from "socket.io-client";
const serverUrl =
  process.env.NEXT_PUBLIC_NODE_ENV === "prod"
    ? process.env.SOCKET_IO_Production_SERVER
    : process.env.SOCKET_IO_LOCALHOST_SERVER;
export const socket = io(serverUrl);
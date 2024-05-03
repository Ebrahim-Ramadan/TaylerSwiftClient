// import { Server } from 'socket.io';
// import { createServer } from 'http';

// export const dynamic = 'force-dynamic'; // defaults to auto

// export async function GET(req, res) {
//   if (res.socket && !res.socket.server.io) {
//     console.log('Socket is initializing');
//     const httpServer = createServer();
//     const io = new Server(httpServer);
//     const connectedClients = new Set();

//     io.on('connection', (socket) => {
//       console.log('New client connected');

//       socket.on('startQuiz', () => {
//         connectedClients.add(socket.id);
//         io.emit('connectedClients', Array.from(connectedClients));
//       });

//       socket.on('finishQuiz', () => {
//         connectedClients.delete(socket.id);
//         io.emit('connectedClients', Array.from(connectedClients));
//       });

//       socket.on('disconnect', () => {
//         connectedClients.delete(socket.id);
//         io.emit('connectedClients', Array.from(connectedClients));
//       });
//     });

//     const socketServer = httpServer.listen('/api/quickusers');

//     res.socket.server = httpServer;
//     res.socket.server.io = io;
//   } else {
//     console.log('Socket is already running');
//   }

//   return Response.json({ 'ass': 'hello' })
// }

// route.js
import { Server } from 'socket.io';
import { createServer } from 'http';

let io;

export async function GET(req, res) {
  if (!io) {
    console.log('Socket is initializing');
    const httpServer = createServer();
    io = new Server(httpServer);
    const connectedClients = new Set();

    io.on('connection', (socket) => {
      console.log('New client connected');

      socket.on('startQuiz', () => {
        connectedClients.add(socket.id);
        io.emit('connectedClients', Array.from(connectedClients));
      });

      socket.on('finishQuiz', () => {
        connectedClients.delete(socket.id);
        io.emit('connectedClients', Array.from(connectedClients));
      });

      socket.on('disconnect', () => {
        connectedClients.delete(socket.id);
        io.emit('connectedClients', Array.from(connectedClients));
      });
    });

    const server = httpServer.listen(3001, () => {
      console.log('Socket server listening on port 3001');
    });

    res.socket.server = server;
    res.socket.server.io = io;
  } else {
    console.log('Socket is already running');
  }

  return Response.json({ 'ass': 'hello' })
}

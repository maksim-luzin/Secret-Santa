import { Socket } from 'socket.io';

export default (socket: Socket) => {
  socket.on('createRoom', (roomId) => {
    socket.join(roomId);
  });
  socket.on('leaveRoom', (roomId) => {
    socket.leave(roomId);
  });
};

import { useState } from "react";
import { useHistory } from "react-router-dom";
import io from "socket.io-client";
import { Routes, SocketEvents } from "../enums";
import { useAction } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/store";

const WsHelper = () => {
  const { id } = useTypedSelector(({ authentication }) => authentication);
  const { santaAction } = useAction();
  const history = useHistory();

  const [socket] = useState(io());
  socket.emit('createRoom', id);
  socket.on(SocketEvents.PLAY, async () => {
    await santaAction();
    history.push(Routes.WISHLIST);
  });

  return null;
};

export { WsHelper };

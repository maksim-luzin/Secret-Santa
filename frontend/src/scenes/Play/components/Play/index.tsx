import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import io from 'socket.io-client';
import { Container, Card, Button } from 'react-bootstrap';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { play } from '../../services';
import { Routes, SocketEvents } from '../../../../common/enums';
import { useAction } from '../../../../common/hooks';

const Play = () => {
  const { santaAction } = useAction();
  const history = useHistory();
  const [isDisabled, setDisabled] = useState(false)
  const [socket] = useState(io());

  socket.on(SocketEvents.PLAY, async () => {
    await santaAction();
    history.push(Routes.WISHLIST);
  });

  const playSubmit = async () => {
    try {
      await play()
      NotificationManager.success('You have already played! Please wait.');
      setDisabled(true);
    } catch ({ message }) {
      NotificationManager.error(message, '', 5000);
    }
  }
  return (
    <Container fluid='md' className="vh-100 d-flex justify-content-center align-items-center">
      <Card>
        <Card.Body>
          {
            isDisabled
              ? <Button variant="primary" size="lg" disabled>Play</Button>
              : <Button variant="primary" size="lg" onClick={playSubmit}>Play</Button>
          }
        </Card.Body>
      </Card>
      <NotificationContainer />
    </Container>
  );
};

export { Play }

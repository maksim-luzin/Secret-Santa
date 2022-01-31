import React, { useState } from "react";
import { Container, Card, Button } from 'react-bootstrap';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { playService } from '../../services'

const Play = () => {
  const [isDisabled, setDisabled] = useState(false)

  const play = async () => {
    await playService()
    NotificationManager.success('You have already played! Please wait.');
    setDisabled(true);
  }

  return (
    <Container fluid='md' className="vh-100 d-flex justify-content-center align-items-center">
      <Card>
        <Card.Body>
          {
            isDisabled
              ? <Button variant="primary" size="lg" disabled>Play</Button>
              : <Button variant="primary" size="lg" onClick={play}>Play</Button>
          }
        </Card.Body>
      </Card>
      <NotificationContainer />
    </Container>
  );
};

export { Play };

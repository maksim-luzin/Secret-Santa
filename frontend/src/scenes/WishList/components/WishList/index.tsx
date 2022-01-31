import React from "react";
import { useHistory } from 'react-router-dom';
import { Loader } from '../../../../common/components/Loader';
import { Container, Card, ListGroup, Button } from "react-bootstrap";
import { Routes } from '../../../../common/enums';
import 'react-notifications/lib/notifications.css';
import { useAction } from '../../../../common/hooks/useAction';
import { useTypedSelector } from '../../../../common/hooks/store';

const WishList = () => {
  const { logoutAction } = useAction();
  const history = useHistory();
  const { firstName, lastName, wishList } = useTypedSelector(({ wish: { list } }) => list)

  const getNextGame = async () => {
    await logoutAction();
    history.push(Routes.AUTH);
  }

  return (
    <>
      <Loader isLoading={!Boolean(firstName)}>
        <Container fluid="md" >
          <Card className="mt-4">
            <Card.Body className="d-flex justify-content-center align-items-center">
              <Card.Title>Wish list for {firstName} {lastName}</Card.Title>
            </Card.Body>
            <ListGroup variant="flush">
              {
                wishList.map(wish => (
                  <ListGroup.Item>{wish}</ListGroup.Item>
                ))
              }
            </ListGroup>
            <Card.Body>
              <Button variant="primary" size="lg" onClick={getNextGame}>Next Game</Button>
            </Card.Body>
          </Card>
        </Container >
      </Loader>
    </>
  );
};

export { WishList };

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Routes } from '../../enums';

import styles from './styles.module.scss';

const NotFound = () => (
  <div className="d-flex justify-content-center align-items-center vh-100">
    <div className="text-center">
      <h1 className={styles.notFound}>404</h1>
      <p className={styles.messageStr1}>Oops, sorry we can&#39;t find that page!</p>
      <p className={styles.messageStr2}>Either something went wrong or the page doesn&#39;t exist anymore.</p>
      <NavLink exact to={Routes.AUTH}>
        <Button
          variant="primary"
          name="home-page"
          className={styles.btnHomePage}
        >
          Start game
        </Button>
      </NavLink>
    </div>
  </div>
);

export { NotFound };

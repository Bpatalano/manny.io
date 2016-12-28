import React from 'react';
import { Link, IndexLink } from 'react-router';
import styles from './styles.css';

export default () => (
  <div className={styles.header}>
    <IndexLink
      to="/"
      className={styles.link}
      activeClassName={styles.link_active}
    >
      Home
    </IndexLink>

    <Link
      to="/applications"
      className={styles.link}
      activeClassName={styles.link_active}
    >
      Applications
    </Link>

    <Link
      to="/bugDuty"
      className={styles.link}
      activeClassName={styles.link_active}
    >
      Bug Duty
    </Link>

    <Link
      to="/chores"
      className={styles.link}
      activeClassName={styles.link_active}
    >
      Chores
    </Link>
  </div>
);

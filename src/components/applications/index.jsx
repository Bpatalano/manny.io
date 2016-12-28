import React from 'react';
import styles from './styles.css';
import AppList from '../../containers/appList';

const Applications = () => (
  <div className={styles.applications}>
    <h1>Applications</h1>
    <AppList />
  </div>
);

export default Applications;

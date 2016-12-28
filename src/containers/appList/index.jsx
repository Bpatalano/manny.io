import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';

const AppList = ({ applications }) => {
  applications = applications.map((app, index) => (
    <li key={index} />
  ));

  return (
    <div className={styles.appList}>
      <ol>{applications}</ol>
    </div>
  );
};

AppList.propTypes = {
  applications: PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default connect(
  ({ applications }) => ({ applications }),
)(AppList);

import React from 'react';
import UserHeaderNav from './UserHeaderNav';
import styles from './UserHeader.module.css';

const UserHeader = () => {
  return (
    <header className={styles.header}>
      <h1 className="title">Titulo</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;

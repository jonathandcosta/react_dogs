import React from 'react';
import styles from './Header';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.Header}>
      <nav className="container">
        <Link to="/">Home</Link>
        <Link to="/login">Login / Criar</Link>
      </nav>
    </div>
  );
};

export default Header;

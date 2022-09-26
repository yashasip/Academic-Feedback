import React from 'react'
import styles from '../styles/Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>Academic-Feedback</p>
      <a href="https://www.sjec.ac.in/" target="_blank" className={styles.contactUs}>Contact Us</a>
    </footer>
  );
};

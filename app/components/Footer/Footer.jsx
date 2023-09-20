"use client";
import React from "react";
import Image from "next/image";
import styles from "./Contact.module.css";

export const Footer = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out !</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <Image
            src="/contacts/mail icon.png"
            alt="Email-icon"
            width="30"
            height="30"
          />
          <a href="#"></a>
        </li>
      </ul>
    </footer>
  );
};

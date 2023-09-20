"use client";
import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to Happily!</h1>
        <p className={styles.description}>
          We're here to empower students to prioritize their mental well-being.
          Explore our assessment tools, connect with a supportive community, and
          seek guidance from trusted professionals. Join us in breaking the
          silence around mental health and building a brighter future, together.
        </p>
      </div>
      <Image
        src="/hero/heroImage.png"
        alt="Hero Image"
        className={styles.heroImg}
        width="300"
        height="300"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

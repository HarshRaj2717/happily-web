"use client";
import React from "react";
import styles from "./About.module.css";
import Image from "next/image";

export const About = () => {
  return (
    <section id="about" className={styles.container}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <Image
          src="/about/aboutImage.png"
          alt="sitting wit laptop"
          className={styles.aboutImage}
          width="250"
          height="250"
        />
        <p className={styles.para}>
          We are the 'Moon and Stars' team, a passionate team of six individuals
          dedicated to driving positive change through innovation. As
          participants in the Smart India Hackathon, we bring a diverse range of
          skills and expertise to the table. With a shared commitment to making
          a meaningful impact, we aim to tackle pressing challenges and create
          solutions that matter.
        </p>
      </div>
    </section>
  );
};

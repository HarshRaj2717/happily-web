"use client";
import "./index.css";
import "@fontsource/outfit";
import "@fontsource/roboto";
import styles from "./App.module.css";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";

export default function Home() {
  return (
    <div className={styles.App}>
      <Hero />
      <About />
    </div>
  );
}

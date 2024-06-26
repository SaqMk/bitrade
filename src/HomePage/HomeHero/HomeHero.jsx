import React from "react";
import styles from "../HomeHero/HomeHero.module.css";
import { Link } from "react-router-dom";
export default function () {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.contentContainer}>
          <p className={styles.title}>
            THE RIGHT PLACE FOR YOUR ONLINE TRADING NEEDS WITH BITRADE
          </p>
          <p className={styles.content}>
            experience the pinnacle of convivence with our user-friendly
            interface Gain access to a vast array of over 100 global trading
            assets{" "}
          </p>
          <Link to="login">
            <button className={styles.button}>Start Trading</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

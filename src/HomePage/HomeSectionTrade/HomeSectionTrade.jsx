import React from "react";
import styles from "../HomeSectionTrade/homeSectionTrade.module.css";
import attach_money from "../../images/attach_money.svg";
import acute from "../../images/acute.svg";
import currency_bitcoin from "../../images/currency_bitcoin.svg";
import currency_exchange from "../../images/currency_exchange.svg";
import { useState } from "react";
export default function HomeSectionTrade() {
  const [count, setCount] = useState([
    {
      id: 1,
      img: attach_money,
      title: "Minimum investment amount",
      content: "start trading with 5$",
    },
    {
      id: 2,
      img: acute,
      title: "Quick conclusions",
      content: "Make money and withdraw it quickly",
    },
    {
      id: 3,
      img: currency_bitcoin,
      title: "Trading assets",
      content: "Select an asset that fits your needs",
    },
    {
      id: 4,
      img: currency_exchange,
      title: "Refund",
      content:
        "Compensation for loss-making transaction up to 30% in cash funds",
    },
  ]);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className={styles.container}>
      {count.map((item,index) => (
        <div
          key={item.id}
          className={`${activeIndex === index ? styles.active : styles.item}`}
          onMouseOver={() => handleClick(index)}
        >
           {/* className={index === 1 || index === 3 ? styles.highlight : styles.itemContent} */}
          <div className={styles.itemContent}>
            <img src={item.img} />
            <div className={styles.content}>
              <p className={styles.title}>{item.title}</p>
              <p className={styles.contentP}>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

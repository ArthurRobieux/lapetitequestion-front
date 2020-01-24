import React from "react";
import styles from "./styles.module.scss";

export const HomePage = () => {
  return (
    <div>
      <div className={styles.title}>
        <b>Test Specify</b>
      </div>

      <div className={styles.title}>Couleurs</div>

      <div className={styles.colorA}>Color A</div>
      <div className={styles.colorB}>Color B</div>
      <div className={styles.colorC}>Color C</div>
      <div className={styles.colorD}>Color D</div>
      <div className={styles.colorE}>Color E</div>
      <div className={styles.colorF}>Color F</div>

      <div className={styles.title}>Icons</div>

      <div className={styles.text}>Menu</div>
      <img
        src={require("../../../assets/ICONS/MENU/calendar.svg")}
        className={styles.icon}
      />
      <img
        src={require("../../../assets/ICONS/MENU/collect.svg")}
        className={styles.icon}
      />
      <img
        src={require("../../../assets/ICONS/MENU/members.svg")}
        className={styles.icon}
      />
      <img
        src={require("../../../assets/ICONS/MENU/messages.svg")}
        className={styles.icon}
      />
      <img
        src={require("../../../assets/ICONS/MENU/presences.svg")}
        className={styles.icon}
      />
      <img
        src={require("../../../assets/ICONS/MENU/profile.svg")}
        className={styles.icon}
      />
      <img
        src={require("../../../assets/ICONS/MENU/settings.svg")}
        className={styles.icon}
      />
      <img
        src={require("../../../assets/ICONS/MENU/statistics.svg")}
        className={styles.icon}
      />
      <img
        src={require("../../../assets/ICONS/MENU/teams.svg")}
        className={styles.icon}
      />
      <div className={styles.text}>Sports</div>

      <img
        src={require("../../../assets/ICONS/SPORTS/badminton.svg")}
        className={styles.icon}
      />
      <img
        src={require("../../../assets/ICONS/SPORTS/baseball.svg")}
        className={styles.icon}
      />
      <img
        src={require("../../../assets/ICONS/SPORTS/basket.svg")}
        className={styles.icon}
      />
      <img
        src={require("../../../assets/ICONS/SPORTS/soccer.svg")}
        className={styles.icon}
      />
      <img
        src={require("../../../assets/ICONS/SPORTS/handball.svg")}
        className={styles.icon}
      />
      <img
        src={require("../../../assets/ICONS/SPORTS/floorball.svg")}
        className={styles.icon}
      />
      <img
        src={require("../../../assets/ICONS/SPORTS/judo.svg")}
        className={styles.icon}
      />
      <img
        src={require("../../../assets/ICONS/SPORTS/ping-pong.svg")}
        className={styles.icon}
      />
    </div>
  );
};

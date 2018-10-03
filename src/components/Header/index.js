import React from "react";
import ProfileMenu from "../ProfileMenu";
import styles from "./index.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <ProfileMenu />
    </div>
  );
};

export default Header;

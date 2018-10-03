import React from "react";
import styles from "./index.css";

const ProfileMenu = () => {
  return (
    <div className={styles.avatar}>
      <img src="placeholder.svg" alt="" />
      <ul>
        <li>View profile</li>
        <li>Sign out</li>
      </ul>
    </div>
  );
};

export default ProfileMenu;

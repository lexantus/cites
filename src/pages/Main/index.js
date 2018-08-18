import React from "react";
import AddCite from "../../components/AddCite";
import CitesTable from "../../components/CitesTable";
import cites from "../../data/cites";
import styles from "./index.css";

const MainPage = () => (
  <div className={styles.wrapper}>
    <AddCite />
    <CitesTable data={cites} />
  </div>
);

export default MainPage;

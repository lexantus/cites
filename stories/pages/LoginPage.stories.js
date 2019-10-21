import React from "react";
import LoginPage from "../../src/pages/Login";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Pages|Login"
};

export const loginPage = () => (
  <Router>
    <LoginPage />
  </Router>
);

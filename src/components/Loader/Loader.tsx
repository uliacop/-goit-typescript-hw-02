import React, { FC } from "react";
import { Audio } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader: FC = () => (
  <div className={css.loaderContainer}>
    <Audio height="120" width="150" color="tomato" ariaLabel="loading" />
    <p>Loading data, please wait...</p>
  </div>
);

export default Loader;

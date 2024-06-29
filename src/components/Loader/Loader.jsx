import { Audio } from "react-loader-spinner";
import css from "./Loader.module.css";
const Loader = () => (
  <div className={css.loaderContainer}>
    <Audio
      height="120"
      width="150"
      radius="9"
      color="tomato"
      ariaLabel="loading"
    />
    <p>Loading data, please wait...</p>
  </div>
);

export default Loader;

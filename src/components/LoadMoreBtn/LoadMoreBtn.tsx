import { FC } from "react";
import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div className={css.btnStyle}>
      <button onClick={onClick} className={css.btnLoad}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;

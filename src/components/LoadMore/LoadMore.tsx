import css from "./LoadMore.module.css"
import React, { FC } from "react";

interface LoadMoreProps {
  handleLoadMoreClick: () => void;
}

const LoadMore: FC<LoadMoreProps> = ({ handleLoadMoreClick }) => {
  return (
      <div className={css.boxBtn}>
          <button className={css.btnLoad} type="button" onClick={handleLoadMoreClick}>
      Load more
    </button>
      </div>

    )
}

export default LoadMore;
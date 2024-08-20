import css from "./LoadMore.module.css"

function LoadMore({ handleLoadMoreClick }) {
  return (
      <div className={css.boxBtn}>
          <button className={css.btnLoad} type="button" onClick={handleLoadMoreClick}>
      Load more
    </button>
      </div>

    )
}

export default LoadMore;
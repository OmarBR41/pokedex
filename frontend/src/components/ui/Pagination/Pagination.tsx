import classNames from "classnames";
import styles from "./Pagination.module.css";

type PaginationProps = {
  page: number;
  totalPages: number;
  handlePagination: (page: number) => void;
};

export const Pagination = ({
  page,
  totalPages,
  handlePagination,
}: PaginationProps) => {
  const handleFirst = () => handlePagination(1);
  const handleLast = () => handlePagination(totalPages);
  const handlePrev = () => handlePagination(page - 1);
  const handleNext = () => handlePagination(page + 1);
  const handlePrevTwo = () => handlePagination(page - 2);
  const handleNextTwo = () => handlePagination(page + 2);

  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;

  return (
    <div className={styles.container}>
      <PrevButton isDisabled={isFirstPage} handler={handlePrev} />

      <div className={styles.pagesContainer}>
        <button
          type="button"
          className={classNames(styles.pageItem, {
            [styles.active]: isFirstPage,
          })}
          onClick={() => handleFirst()}
          disabled={isFirstPage}
        >
          {1}
        </button>

        {page > 4 && <div className={styles.separator}>...</div>}

        {page > 3 && totalPages > 3 && (
          <button
            type="button"
            className={styles.pageItem}
            onClick={() => handlePrevTwo()}
          >
            {page - 2}
          </button>
        )}

        {page > 2 && (
          <button
            type="button"
            className={styles.pageItem}
            onClick={() => handlePrev()}
          >
            {page - 1}
          </button>
        )}

        {page !== 1 && page !== totalPages && (
          <button
            type="button"
            className={[styles.pageItem, styles.active].join(" ")}
            onClick={() => handlePagination(page)}
            disabled
          >
            {page}
          </button>
        )}

        {page < totalPages - 1 && (
          <button
            type="button"
            className={styles.pageItem}
            onClick={() => handleNext()}
          >
            {page + 1}
          </button>
        )}

        {page < totalPages - 2 && (
          <button
            type="button"
            className={styles.pageItem}
            onClick={() => handleNextTwo()}
          >
            {page + 2}
          </button>
        )}

        {page < totalPages - 2 && <div className={styles.separator}>...</div>}

        <button
          type="button"
          className={classNames(styles.pageItem, {
            [styles.active]: isLastPage,
          })}
          onClick={() => handleLast()}
          disabled={isLastPage}
        >
          {totalPages}
        </button>
      </div>

      <NextButton isDisabled={isLastPage} handler={handleNext} />
    </div>
  );
};

type ButtonProps = {
  isDisabled: boolean;
  handler: () => void;
};

const PrevButton = ({ isDisabled, handler }: ButtonProps) => {
  return (
    <button
      type="button"
      className={classNames([styles.pageItem, styles.sides].join(" "))}
      onClick={() => handler()}
      disabled={isDisabled}
    >
      &lt;
    </button>
  );
};

const NextButton = ({ isDisabled, handler }: ButtonProps) => {
  return (
    <button
      type="button"
      className={[styles.pageItem, styles.sides].join(" ")}
      onClick={() => handler()}
      disabled={isDisabled}
    >
      &gt;
    </button>
  );
};

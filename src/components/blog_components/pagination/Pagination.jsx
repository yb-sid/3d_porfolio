import React from "react";
import styles from "./pagination.module.css";

const Pagination = ({ hasPrev, hasNext, onNextPage, onPreviousPage }) => {
    return (
        <div className={styles.container}>
            <button
                className={styles.button}
                disabled={!hasPrev}
                onClick={onPreviousPage}
            >
                Previous
            </button>
            <button
                disabled={!hasNext}
                className={styles.button}
                onClick={onNextPage}
            >
                Next
            </button>
        </div >
    );
};

export default Pagination;
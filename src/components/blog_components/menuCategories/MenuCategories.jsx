import { Link } from "react-router-dom";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
    return (
        <div className={styles.categoryList}>
            <Link
                to="/blogs?cat=style"
                className={`${styles.categoryItem} ${styles.style}`}
            >
                Style
            </Link>
            <Link to="/blogs" className={`${styles.categoryItem} ${styles.fashion}`}>
                Fashion
            </Link>
            <Link to="/blogs" className={`${styles.categoryItem} ${styles.food}`}>
                Food
            </Link>
            <Link to="/blogs" className={`${styles.categoryItem} ${styles.travel}`}>
                Travel
            </Link>
            <Link to="/blogs" className={`${styles.categoryItem} ${styles.culture}`}>
                Culture
            </Link>
            <Link to="/blogs" className={`${styles.categoryItem} ${styles.coding}`}>
                Coding
            </Link>
        </div>
    );
};

export default MenuCategories;
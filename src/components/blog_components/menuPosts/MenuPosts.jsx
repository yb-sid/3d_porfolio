import { Link } from "react-router-dom";
import React from "react";
import styles from "./menuPosts.module.css"

const MenuPosts = ({ withImage }) => {
    return (
        <div className={styles.items}>
            <Link to="/" className={styles.item}>
                {withImage && (
                    <div className={styles.imageContainer}>
                        <img src="/p1.jpeg" alt="first menu post" className={styles.image} />
                    </div>
                )}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.travel}`}>Travel</span>
                    <h3 className={styles.postTitle}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}> - 10.03.2023</span>
                    </div>
                </div>
            </Link>
            <Link to="/" className={styles.item}>
                {withImage && (
                    <div className={styles.imageContainer}>
                        <img src="/p1.jpeg" alt="second menu posts" className={styles.image} />
                    </div>
                )}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.culture}`}>
                        Culture
                    </span>
                    <h3 className={styles.postTitle}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}> - 10.03.2023</span>
                    </div>
                </div>
            </Link>
            <Link to="/" className={styles.item}>
                {withImage && (
                    <div className={styles.imageContainer}>
                        <img src="/p1.jpeg" alt="third menu posts" className={styles.image} />
                    </div>
                )}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.food}`}>Food</span>
                    <h3 className={styles.postTitle}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}> - 10.03.2023</span>
                    </div>
                </div>
            </Link>
            <Link href="/" className={styles.item}>
                {withImage && (
                    <div className={styles.imageContainer}>
                        <img src="/p1.jpeg" alt="fourth menu posts" className={styles.image} />
                    </div>
                )}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.fashion}`}>
                        Fashion
                    </span>
                    <h3 className={styles.postTitle}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}> - 10.03.2023</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default MenuPosts;
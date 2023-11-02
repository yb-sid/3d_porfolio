import React from "react";
import styles from './featured.module.css'
import { p1 } from "../../../assets";
const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b> Discover my stories and creative ideas.</b>
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <img src={p1} alt="featured image" className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet alim consectetur adipisicing elit.</h1>
                    <p className={styles.postDesc}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Cupiditate, quam nisi magni ea laborum inventore voluptatum
                        laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
                        quisquam! Harum unde sit culpa debitis.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Featured
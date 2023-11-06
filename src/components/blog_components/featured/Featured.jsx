import React from "react";
import styles from './featured.module.css'
import { human_mind } from "../../../assets";
const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b> Discover my stories and creative ideas.</b>
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <img src={human_mind} alt="featured image" className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}></h1>
                    <p className={styles.postDesc}>
                        The human mind is a remarkable and complex organ,
                        setting us apart from all other life forms on Earth.
                        With its intricate web of neurons,
                        it's the epicenter of our thoughts, emotions,
                        and consciousness, capable of incredible feats of creativity,
                        problem-solving, and self-awareness.
                        It's a marvel of evolution, a finely tuned instrument that
                        has allowed us to thrive and adapt in a constantly changing world.
                    </p>
                    <p className={styles.postDesc2}>
                        In this blog, I embark on a personal journey of exploration,
                        delving into various topics inspired by my own experiences.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Featured
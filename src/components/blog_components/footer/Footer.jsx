import React from "react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";
import { logo_lr } from "../../../assets";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <img src={logo_lr} alt="Way of this Sid blog" width={50} height={50} />
                    <h1 className={styles.logoText}>Way of the Sid</h1>
                </div>
                <p className={styles.desc}>
                    Empowering the digital future.
                    © 2023. All rights reserved.
                </p>
                {/* <div className={styles.icons}>
                    <img src="/facebook.png" alt="" width={18} height={18} />
                    <img src="/instagram.png" alt="" width={18} height={18} />
                    <img src="/tiktok.png" alt="" width={18} height={18} />
                    <img src="/youtube.png" alt="" width={18} height={18} />
                </div> */}
            </div>
            {/* <div className={styles.links}>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Links</span>
                    <Link to="/">Homepage</Link>
                    <Link to="/">Blog</Link>
                    <Link to="/">About</Link>
                    <Link to="/">Contact</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Tags</span>
                    <Link to="/">Style</Link>
                    <Link to="/">Fashion</Link>
                    <Link to="/">Coding</Link>
                    <Link to="/">Travel</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Social</span>
                    <Link to="/">Facebook</Link>
                    <Link to="/">Instagram</Link>
                    <Link to="/">Tiktok</Link>
                    <Link to="/">Youtube</Link>
                </div>
            </div> */}
        </div>
    );
};

export default Footer;
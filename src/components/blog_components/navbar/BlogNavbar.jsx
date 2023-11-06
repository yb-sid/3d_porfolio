import React from "react";
import styles from './navbar.module.css'
import { Link } from "react-router-dom";


const BlogNavbar = ({ catPage }) => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Way of the Sid</div>
            <div className={styles.links}>
                <Link to="/" >Home</Link>
                {catPage && <Link to="/blogs">Blog Home</Link>}
            </div>
        </div>
    )
}

export default BlogNavbar
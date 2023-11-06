import styles from "./card.module.css";
import { Link } from "react-router-dom";

const Card = ({ id, item }) => {
    return (
        <div className={styles.container} >
            {item.img && (
                <div className={styles.imageContainer}>
                    <img src={item.img} alt="" className={styles.image} />
                </div>
            )}
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>
                        {item.date.substring(0, 10)} -{" "}
                    </span>
                    <span className={styles.category}>{item.catSlug}</span>
                </div>
                <Link to={`/posts?id=${id}`} onClick={() => scroll(0, 0)}>
                    <h1>{item.title}</h1>
                </Link>
                {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
                {/* <div className={styles.desc} dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 60) }} /> */}
                <Link to={`/posts?id=${id}`} onClick={() => scroll(0, 0)} className={styles.link}>
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default Card;
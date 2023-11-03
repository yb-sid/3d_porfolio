import CardList from "../cardList/CardList";
import styles from "./categorypage.module.css";
import Menu from "../menu/Menu";
import { useParams } from "react-router-dom";
import { StarsCanvas } from "../../canvas";
import BlogNavbar from "../navbar/BlogNavbar";
import Footer from "../footer/Footer";

const CatPage = ({ slug }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{slug} Blog</h1>
            <div className={styles.content}>
                <CardList categoryName={slug} />
                <Menu />
            </div>
        </div>
    )
}

const CategoryPage = () => {
    const { slug } = useParams()
    return (
        <div className="relative z-0">
            <StarsCanvas />
            <div className="wrapper">
                <BlogNavbar catPage={true} />
                <CatPage slug={slug} />
                <Footer />
            </div>

        </div>
    );
};

export default CategoryPage;
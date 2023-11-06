import React, { useEffect, useState } from "react";
import styles from './categorylist.module.css'
import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

const CAT_QUERY = gql`
query NewQuery {
    categories {
      nodes {
        slug
        name
        databaseId
      }
    }
  }
`

const CategoryList = () => {

    const { loading, error, data } = useQuery(CAT_QUERY)

    const [categories, setCategories] = useState([])
    useEffect(() => {
        if (!loading) {
            setCategories(data.categories.nodes)
        }
    });

    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Categories</h1>
            <div className={styles.categories}>
                {
                    categories?.map((item) => (
                        <Link
                            to={`/blogs/${item.slug}`}
                            className={`${styles.category} ${styles.inner}`}
                            key={item.databaseId}
                            onClick={() => scroll(0, 0)}
                        >
                            {item.name}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default CategoryList
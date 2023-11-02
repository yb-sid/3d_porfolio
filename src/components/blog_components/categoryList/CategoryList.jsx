import React, { useEffect } from "react";
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

    const { loading, error, data, refetch } = useQuery(CAT_QUERY)
    useEffect(() => {
        refetch(); // This will trigger the query on component mount
    }, [refetch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const categories = data.categories.nodes;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Categories</h1>
            <div className={styles.categories}>
                {
                    categories?.map((item) => (
                        <Link
                            to={`/blogs?cat=${item.slug}`}
                            className={`${styles.category} ${styles.inner}`}
                            key={item.databaseId}
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
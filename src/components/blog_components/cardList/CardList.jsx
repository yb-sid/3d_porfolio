import React, { useState, useEffect } from "react";
import styles from './cardlist.module.css'
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";

import { gql, useQuery } from "@apollo/client"

const POST_QUERY = gql`
  query NewQuery(
    $first: Int
    $last: Int
    $after: String
    $before: String) {
    posts(first: $first, last: $last, after: $after, before: $before) {
      nodes {
        featuredImage {
          node {
            sourceUrl
          }
        }
        title
        databaseId
        date
        categories {
          nodes {
            slug
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`;


const getItems = (rawData) => {
  const convertedArray = rawData.map((item) => ({
    img: item.featuredImage.node.sourceUrl,
    title: item.title,
    slug: item.categories.nodes[0].slug,
    id: item.databaseId,
    date: item.date

  }))
  return convertedArray
}


const POST_PER_PAGE = 2

// Function to update the query with the new results
const updateQuery = (previousResult, { fetchMoreResult }) => {
  return fetchMoreResult.posts.nodes.length ? fetchMoreResult : previousResult;
};

const CardList = ({ page, onPageChange }) => {
  const variables = {
    first: POST_PER_PAGE,
    last: null,
    after: null,
    before: null
  };

  const { loading, error, data, fetchMore } = useQuery(POST_QUERY, { variables });

  const [items, setItems] = useState([]);
  const [pageInfo, setPageInfo] = useState({ hasNextPage: false, hasPreviousPage: false });


  useEffect(() => {
    if (!loading && !error && data) {
      const rawData = data.posts.nodes;
      setItems(getItems(rawData));
      setPageInfo(data.posts.pageInfo)
    }
  }, [data]);

  if (error) {
    return <p>Error: {error.message}</p>;
  }



  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {items?.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
      {/* pagination section */}
      <div className={styles.pageContainer}>
        <button
          className={styles.button}
          disabled={!pageInfo.hasPreviousPage}
          onClick={() => {
            fetchMore({
              variables: {
                first: null,
                after: null,
                last: POST_PER_PAGE,
                before: data.posts.pageInfo.startCursor || null
              },
              updateQuery
            });
          }}
        >
          Previous
        </button>
        <button
          className={styles.button}
          disabled={!pageInfo.hasNextPage}
          onClick={() => {
            fetchMore({
              variables: {
                first: POST_PER_PAGE,
                after: data.posts.pageInfo.endCursor || null,
                last: null,
                before: null
              },
              updateQuery
            });
          }}
        >
          Next
        </button>
      </div >
    </div>
  );
};

export default CardList;
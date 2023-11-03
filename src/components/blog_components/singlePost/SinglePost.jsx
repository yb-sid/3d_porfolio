import React, { useState, useEffect } from "react";
import styles from "./singlepost.module.css";
import Menu from "../menu/Menu";
import { gql, useQuery } from '@apollo/client';
import './custom-styles.css'
import DOMPurify from "dompurify";

const GET_SINGLE_POST = gql`
  query GetSinglePost($postId: ID!) {
    post(id: $postId, idType: DATABASE_ID) {
      content
      date
      featuredImage {
        node {
          altText
          sourceUrl
        }
      }
      title
    }
  }
`;

const SinglePage = ({ postId }) => {

    const { error, data, loading } = useQuery(GET_SINGLE_POST, {
        variables: {
            postId: postId
        },

    })

    useEffect(() => {
        if (!loading) {
            const cleanContent = DOMPurify.sanitize(data.post.content)
            console.log(cleanContent)
        }
    }, [data])


    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>{data?.post.title}</h1>
                </div>
                {data?.post.featuredImage && (
                    <div className={styles.imageContainer}>
                        <img src={data.post.featuredImage.node.sourceUrl} alt="" className={styles.image} />
                    </div>
                )}
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div
                        // className={styles.description}
                        dangerouslySetInnerHTML={{ __html: data?.post.content }}
                    />
                </div>
                <Menu />
            </div>
        </div>
    );
};

export default SinglePage;
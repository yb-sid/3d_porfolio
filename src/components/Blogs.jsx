import React, { useState, useEffect } from "react";
import { StarsCanvas } from "./canvas";
import { BlogNavbar, Featured, CategoryList, Footer, CardList, Menu } from "./blog_components"
import styles from "./blogs.module.css"

const BlogComponents = () => {

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={currentPage} onPageChange={handlePageChange} />
        <Menu />
      </div>
    </div>
  )
}

const Blogs = () => {
  return (
    <div className="relative z-0">
      <StarsCanvas />
      <div className="wrapper">
        <BlogNavbar />
        <BlogComponents />
        <Footer />
      </div>
    </div>

  )
}

export default Blogs
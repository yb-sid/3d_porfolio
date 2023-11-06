import React from "react";
import { StarsCanvas } from "./canvas";
import { BlogNavbar, Featured, CategoryList, Footer, CardList, Menu } from "./blog_components"
import styles from "./blogs.module.css"

const BlogComponents = () => {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList categoryName="" />
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
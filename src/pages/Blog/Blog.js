import React from "react";
import BlogCard from "../../components/Blog/BlogCard";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Container from "../../components/Container/Container";
import Meta from "../../components/seo/Meta";
import "./Blog.css";

const Blog = () => {
  return (
    <>
      <Meta title={"Blog"} />
      <BreadCrumb title="Blog" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Find By Category</h3>
              <div>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-6 mb-3">
                <BlogCard />
              </div>
              <div className="col-6 mb-3">
                <BlogCard />
              </div>
              <div className="col-6 mb-3">
                <BlogCard />
              </div>
              <div className="col-6 mb-3">
                <BlogCard />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blog;

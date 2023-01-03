import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogController from "../../backend/post/BlogController";
import Loading from "../loading/Loading";

import "../../assets/scss/index.scss";

const Blog = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    BlogController.getAllPost(setPost, setLoading);
  }, []);

  const listPost = (items) => {
    return (
      <div className="row blog-row">
        <h1>CONTENIDO DESTACADO</h1>
        {items.map((post) => (
          <article className="col-12 col-md-6 blog-post">
            <Link to="/Post" className="effect-blog blog-post-link blog-pt-60">
              <div className="blog-post-link-inner">
                <img src={post.image} alt="blog-1" className="img-fluid" />
              </div>
              {post.new === true ? (
                <span className="rebote position-absolute blog-new-badge bounce">
                  New
                </span>
              ) : (
                ""
              )}
              <h2 className="blog-pt-30 blog-color-primary blog-post-title">
                {post.name}
              </h2>
            </Link>
            <p className="blog-pt-30">{post.description}</p>
            <div className="d-flex justify-content-between blog-pt-45">
              <span className="blog-color-primary">{post.tag}</span>
              <span className="blog-color-primary">{post.date}</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <span>{post.Comments}</span>
              <span>{post.autor}</span>
            </div>
          </article>
        ))}
      </div>
    );
  };

  return loading ? (
    <Loading />
  ) : (
    <main className="col-lg-10 col-md-12 col-sm-12 main-container">
      <div className="referencia">
        <nav aria-label="breadcrumb">
          <ol className="descolgado breadcrumb">
            <li className="breadcrumb-item">
              <li className="breadcrumb-item">
                <Link to="/">Inicio</Link>
              </li>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Blog
            </li>
          </ol>
        </nav>
      </div>
      <div className="blog-contenido">{listPost(post)}</div>
    </main>
  );
};

export default Blog;

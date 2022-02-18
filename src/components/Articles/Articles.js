import React, { useLayoutEffect } from "react";
import { connect } from "react-redux";
import { fetchArticles } from "../../redux";
import { articleNext } from "../../redux";
import { articlePrev } from "../../redux";

import "./Articles.css";

const Articles = (props) => {
  const { fetchArticles, articleNext, articlePrev } = props;
  const { loading, articles, error, current } = props.articles;

  useLayoutEffect(() => {
    fetchArticles();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="articles">
      {loading ? (
        <div className="status-info" style={{ margin: "15px" }}>
          <div className="loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : error ? (
        <p className="status-info error">{error}</p>
      ) : articles.length > 0 ? (
        <div className="article-wrapper">
          <div className="pagination">
            przeglądasz {current} / {articles.length} pobranych
          </div>
          <div className="article-card">
            <h4>{articles[current - 1].title}</h4>
            <p>{articles[current - 1].body}</p>
          </div>
          <span className="nav-btn next-article" onClick={articleNext}>
            »
          </span>
          <span className="nav-btn prev-article" onClick={articlePrev}>
            «
          </span>
        </div>
      ) : (
        <p className="status-info">Brak wyników...</p>
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    articles: state.article,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchArticles: () => dispatch(fetchArticles()),
    articleNext: () => dispatch(articleNext()),
    articlePrev: () => dispatch(articlePrev()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);

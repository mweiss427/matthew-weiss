// Technology.js
import React, { useState, useEffect } from "react";
import Books from "../../articles/technology.md";
import CpuScheduling from "../../articles/cpu-scheduling.md";
import ArticleModal from "../ArticleModal";
import "./Technology.css"
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  link: {
    color: '#b2ffff',
    textDecoration: 'none',
    '&:hover': {
      color: '#92e0ce',
      textDecoration: 'underline',
    },
  },
}));

export default function Technology() {
  const [articles, setArticles] = useState([
    { title: "A Brief History of Technology", file: Books },
    { title: "CPU Scheduling", file: CpuScheduling },
  ]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [markdown, setMarkdown] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const classes = useStyles();

  const openModal = (article) => {
    setSelectedArticle(article);
    fetch(article.file)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div className="background"></div>
      <h2>Technology</h2>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <a
              href="#"
              className={classes.link} // Apply the style to the link element
              onClick={(e) => {
                e.preventDefault();
                openModal(article);
              }}
            >
              {article.title}
            </a>
          </li>
        ))}
      </ul>
      <ArticleModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        title={selectedArticle?.title}
        markdown={markdown}
      />
    </>
  );
}

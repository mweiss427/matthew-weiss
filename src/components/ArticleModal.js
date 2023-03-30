// ArticleModal.js
import React from "react";
import ReactMarkdown from "react-markdown";
import Modal from "react-modal";

const ArticleModal = ({ isOpen, onRequestClose, title, markdown }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Article Modal">
      <h2>{title}</h2>
      <ReactMarkdown>{markdown}</ReactMarkdown>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default ArticleModal;

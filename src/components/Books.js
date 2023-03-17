import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'
import BookMarkup from '../articles/books.md'

export default function Books() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(BookMarkup)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);


  return (
    <>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </>
  );
}
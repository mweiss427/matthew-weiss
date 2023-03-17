import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'
import Books from '../articles/technology.md'

export default function Technology() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(Books)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);


  return (
    <>
      <h2>Technology</h2>
      <h2> I write about technology </h2>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </>
  );
}
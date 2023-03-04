import React from 'react';
import { Routes, Route, useMatch, useLocation} from 'react-router-dom';
import Fish from './Fish';

export default function Manatee() {
  return (
    <>
      <h2>Manatee</h2>
      <h2> Food Sources </h2>
        <Fish/>
    </>
  );
}
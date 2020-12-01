import React from 'react';
import {Navbar} from 'react-bootstrap';

// Functional Component
export default function TopBar({name}){
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <span className="topBar">{name}</span>
      </Navbar.Brand>
    </Navbar>
  );
}
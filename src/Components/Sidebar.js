import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [open, setOpen] = useState(false);

  const openMenu = e => {
    setOpen(!open);
  };

  return (
    <>
      <div
        onClick={openMenu}
        className={`menu-btn-container ${open && 'open'}`}
      >
        <div className="menu-btn"></div>
      </div>
      <aside className={open && 'open'}>
        <Link className="nav-link" to="/">
          Home
        </Link>

        <Link className="nav-link" to="/about">
          About
        </Link>

        <Link className="nav-link" to="/login">
          Login
        </Link>

        <Link className="nav-link" to="/review">
          Review Jobs!
        </Link>
      </aside>
    </>
  );
}

export default Sidebar;

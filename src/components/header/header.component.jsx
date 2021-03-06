import React, { useState, useLayoutEffect } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import DarkModeToggle from '../dark-mode-toggle/dark-mode-toggle.component';
import HamburgerToggle from '../hamburger-toggle/hamburger-toggle.component';

const NAV_LINKS = [
  {
    id: shortid.generate(),
    name: 'blog',
    path: '/blog',
    internal: true,
  },
  {
    id: shortid.generate(),
    name: 'projects',
    path: '/projects/',
    internal: true,
  },
  {
    id: shortid.generate(),
    name: 'Uses',
    path: '/uses/',
    internal: true,
  },
  {
    id: shortid.generate(),
    name: 'CV',
    // path: 'https://josephgattuso.github.io/resume/resume.pdf',
    internal: false,
  },
];

const SiteLinks = ({ toggleMobileNav }) => (
  <>
    {NAV_LINKS.map((item) => (
      <li key={item.id}>
        {item.internal ? (
          <Link
            to={item.path}
            activeClassName="active"
            partiallyActive={true}
            onClick={toggleMobileNav}
          >
            {item.name}
          </Link>
        ) : (
          <a href={item.path}>{item.name}</a>
        )}
      </li>
    ))}
  </>
);

const Header = ({ hide, invisible }) => {
  const [open, setOpen] = useState(false);

  const toggleMobileNav = (path) => {
    if ((path === '/' && open) || typeof path === 'object' || path === undefined) {
      setOpen(!open);
    }
  };

  return (
    <header className={`${hide && 'hide'} ${invisible && 'invisible'}`}>
      <div className="wrapper">
        <div className="content-container">
          <Link
            to="/"
            activeClassName="active"
            className="home"
            onClick={() => toggleMobileNav('/')}
          >
            Joseph Gattuso
          </Link>
          <nav
            className={`${hide && 'hide'} ${invisible && 'invisible'} ${open && 'open'}`}
            role="navigation"
          >
            <ul>
              <SiteLinks toggleMobileNav={toggleMobileNav} />
            </ul>
          </nav>
          <div className="action-buttons">
            <DarkModeToggle />
            <HamburgerToggle open={open} toggleMobileNav={toggleMobileNav} />
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  hide: PropTypes.bool.isRequired,
  invisible: PropTypes.bool.isRequired,
};

export default Header;

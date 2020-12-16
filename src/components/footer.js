import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import IconButton from '@material-ui/core/IconButton';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EmailIcon from '@material-ui/icons/Email';

// eslint-disable-next-line no-unused-vars
const SOCIAL_LINKS = [
  {
    id: shortid.generate(),
    name: 'Twitter',
    url: 'https://twitter.com/',
    component: <TwitterIcon />,
  },
  {
    id: shortid.generate(),
    name: 'Github',
    url: 'https://github.com/',
    component: <GitHubIcon />,
  },
  {
    id: shortid.generate(),
    name: 'LinkedIn',
    url: 'https://linkedin.com/',
    component: <LinkedInIcon />,
  },
  {
    id: shortid.generate(),
    name: 'YouTube',
    url: 'https://youtube.com/',
    component: <YouTubeIcon />,
  },
  {
    id: shortid.generate(),
    name: 'Instagram',
    url: 'https://instagram.com/',
    component: <InstagramIcon />,
  },
  {
    id: shortid.generate(),
    name: 'Email',
    url: 'mailto:example@email.com',
    component: <EmailIcon />,
  },
];

const Footer = ({ hide }) => (
  <footer className={hide ? 'hide' : undefined}>
    <div className="wrapper">
      <div className="content-container">
        <div className="left">&copy; {new Date().getFullYear()} Joseph Gattuso</div>
        <div className="right">
          {SOCIAL_LINKS.map((item) => (
            <IconButton
              key={item.id}
              size="small"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label={`${item.name} profile`}
            >
              {item.component}
            </IconButton>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  hide: PropTypes.bool.isRequired,
};

export default Footer;

import React from 'react';
import { Link } from 'gatsby';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import Layout from '../components/Layout';
import Image from '../components/image';

const IndexPage = () => (
  <Layout hideFooter invisible className="homepage">
    <div className="wrapper">
      <div className="content-container with-margin">
        <div className="profile-card">
          <div className="title">
            <h1>
              Joseph <strong>Gattuso</strong>
            </h1>
            <h2>Web Developer in London</h2>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
              <Button
                variant="outlined"
                color="default"
                href="https://github.com/josephgattuso"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                github
              </Button>
              <Button
                variant="outlined"
                color="default"
                href="https://www.linkedin.com/in/josephgattuso"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                linkedin
              </Button>
            </ButtonGroup>
          </div>
          <Image className="profile-picture" />
        </div>
        <div className="description">
          <p>Hi there! My name is Joseph and I'm a Web Developer based in London.</p>

          <p>
            View my <Link to="/projects">recent work</Link>.
          </p>

          <p>
            You can also reach me on{' '}
            <a
              href="https://twitter.com/@joeetuso"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Twitter
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;

import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import Layout from '../components/layout/layout.component';
import Image from '../components/image/image.component';

const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 0 1.75rem;
  .title {
    grid-column: span 2;
    align-self: center;
    h1,
    h2 {
      font-weight: 400;
    }
    h1 {
      font-size: 3rem;
      margin: 0 0 1rem;
    }
    h2 {
      font-size: 2rem;
      margin: 0 0 1.38rem;
      color: var(--text-secondary);
    }
    .MuiButtonGroup-root {
      a {
        background: none;
        &:hover {
          color: var(--accent);
        }
        .MuiButton-label {
          font-family: 'IBM Plex Sans', sans-serif;
        }
      }
    }
  }
  .profile-picture {
    width: 250px;
    border-radius: 50%;
  }
  @media only screen and (max-width: 768px) {
    justify-content: center;
    margin: 0 0 1.25rem;
    .title {
      order: 1;
      width: 300px;
      text-align: center;
      h1 {
        font-size: 2rem;
      }
      h2 {
        font-size: 1.2rem;
      }
    }
    .profile-picture {
      width: 180px;
      margin: 0 0 1rem;
    }
  }
`;

export default ({ data }) => {
  return (
    <Layout hideFooter invisible className="homepage">
      <div className="wrapper">
        <article className="content-container with-margin">
          <ProfileCard>
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
                  GitHub
                </Button>
                <Button
                  variant="outlined"
                  color="default"
                  href="https://www.linkedin.com/in/josephgattuso"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  LinkedIn
                </Button>
                <Button
                  variant="outlined"
                  color="default"
                  href="https://twitter.com/@joeetuso"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  Twitter
                </Button>
              </ButtonGroup>
            </div>
            <Image className="profile-picture" />
          </ProfileCard>
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
          <section>
            <h3>Latest Posts</h3>
            {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
              <div className="post-wrapper" key={id}>
                <Link to={fields.slug}>
                  <h3>{frontmatter.title}</h3>
                  <p>{frontmatter.date}</p>
                  <p>{excerpt}</p>
                </Link>
              </div>
            ))}
          </section>
        </article>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "YYYY MMMM Do")
        }
        fields {
          slug
        }
      }
    }
  }
`;

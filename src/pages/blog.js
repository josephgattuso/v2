import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';

const BlogIndex = ({ data }) => {
  const { edges: mdx } = data.allMdx;

  return (
    <Layout
      page="Blog"
      className="blog-index"
      mainTitle="Welcome to my Blog"
      mainHeroImage="adrien-olichon-gOdavfpH-3s-unsplash"
      mainHeroImageAlt="adrien-olichon-unsplash"
    >
      <div className="wrapper">
        <div className="content-container with-padding">
          <div className="mdx-preview">
            {mdx.map(({ node: mdx }) => (
              <h2 key={mdx.id}>
                <Link to={mdx.fields.slug}>
                  <h2>{mdx.frontmatter.title}</h2>
                </Link>
                <p>{mdx.excerpt}</p>
              </h2>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default BlogIndex;

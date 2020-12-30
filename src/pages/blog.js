import React from 'react';
import { Link, graphql, navigate } from 'gatsby';
import Pagination from '@material-ui/lab/Pagination';

import Layout from '../components/layout/layout.component';

const BlogIndex = ({ data, pageContext, path }) => {
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
              <div className="post-preview" key={mdx.id}>
                <Link to={mdx.fields.slug}>
                  <h2 classname="title">{mdx.frontmatter.title}</h2>
                  <p>{mdx.frontmatter.date}</p>
                </Link>
                <p className="description">{mdx.excerpt}</p>
                <Link to={mdx.fields.slug}>continue reading &rarr;</Link>
              </div>
            ))}
          </div>
          <Pagination
            shape="rounded"
            count={data.allMdx.totalCount}
            page={pageContext.currentPage}
            onChange={(_event, value) => {
              navigate(`/blog${value > 1 ? `/${value}` : ''}`);
            }}
            // currentPage={pageContext.currentPage}
            // totalCount={data.allMdx.totalCount}
            // pathPrefix="/blog/"
          />
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
            date(formatString: "YYYY MMMM Do")
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

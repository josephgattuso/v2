import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/Layout/Layout';
import Img from '../components/img';

const shortcodes = { Link }; // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout page={mdx.frontmatter.title} description={mdx.frontmatter.description} isBlogPost>
      <div className="wrapper">
        <article className="content-container blog-post with-padding">
          <div className="heading">
            <h1 className="post-title">{mdx.frontmatter.title}</h1>
          </div>
          <Img image={mdx.frontmatter.image} alt={mdx.frontmatter.title} />
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </article>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

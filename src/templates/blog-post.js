import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/layout/layout.component';
import Img from '../components/image/img.component';

const shortcodes = { Link }; // Provide common components here

export default ({ data }) => {
  const { frontmatter, body } = data.mdx;
  return (
    <Layout page={frontmatter.title} description={frontmatter.description} isBlogPost>
      <div className="wrapper">
        <article className="content-container blog-post with-padding">
          <div className="heading">
            <h1 className="post-title">{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
          </div>
          <Img image={frontmatter.image} alt={frontmatter.title} />
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </article>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
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

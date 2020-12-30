import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/layout/layout.component';
import Img from '../components/image/img.component';

import './blog-post.styles.scss';

const shortcodes = { Link }; // Provide common components here

export default ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx;
  const { previous, next } = pageContext;
  return (
    <Layout page={frontmatter.title} description={frontmatter.description} isBlogPost>
      <div className="wrapper">
        <article className="content-container blog-post with-padding">
          <div className="heading">
            <h1 className="post-title">{frontmatter.title}</h1>
            <p clsasName="post-subtitle">{frontmatter.date}</p>
          </div>
          <Img image={frontmatter.image} alt={frontmatter.title} />
          <MDXProvider components={shortcodes}>
            <MDXRenderer className="post-body">{body}</MDXRenderer>
          </MDXProvider>
        </article>
        {previous === false ? null : (
          <>
            {previous && <Link to={previous.fields.slug}>&larr; {previous.frontmatter.title}</Link>}
          </>
        )}
        {next === false ? null : (
          <>{next && <Link to={next.fields.slug}>{next.frontmatter.title} &rarr;</Link>}</>
        )}
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

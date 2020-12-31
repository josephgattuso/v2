import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Img from 'gatsby-image';

import styled from 'styled-components';
// import tw from 'twin.macro';

import Layout from '../components/layout/layout.component';

import {
  ArticleH1,
  ArticleH2,
  ArticleH3,
  ArticleH4,
  ArticleH5,
  ArticleH6,
  ArticlePara,
  ArticleBlockQuote,
  ArticleA,
  ArticleEm,
  ArticleLi,
  ArticleOl,
  ArticleStrong,
  ArticleUl,
  NextRead,
} from '../styles/PostStyles';

// const shortcodes = { Link }; // Provide common components here

export default ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx;
  const { previous, next } = pageContext;
  const featuredImgFluid = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.fluid
    : null;

  return (
    <Layout page={frontmatter.title} description={frontmatter.description} isBlogPost>
      <div className="wrapper">
        <article className="content-container blog-post with-padding">
          <header>
            <h2>{frontmatter.title}</h2>
            <p>{frontmatter.date}</p>
          </header>
          <Img fluid={featuredImgFluid} />
          <div className="markdown">
            <MDXProvider
              components={{
                h1: ArticleH1, // H1 reserved for article semantic title
                h2: ArticleH2,
                h3: ArticleH3,
                h4: ArticleH4,
                h5: ArticleH5,
                h6: ArticleH6,
                p: ArticlePara,
                blockquote: ArticleBlockQuote,
                ul: ArticleUl,
                ol: ArticleOl,
                li: ArticleLi,
                strong: ArticleStrong,
                em: ArticleEm,
                a: ArticleA,
              }}
            >
              <MDXRenderer className="post-body">{body}</MDXRenderer>
            </MDXProvider>
          </div>

          <NextRead className="next-read">
            <h3>Next Read</h3>
            <div className="container">
              {previous === false ? null : (
                <>
                  {previous && (
                    <Link to={previous.fields.slug}>
                      <div className="post-preview-container">{previous.frontmatter.title}</div>
                    </Link>
                  )}
                </>
              )}
              {next === false ? null : (
                <>
                  {next && (
                    <Link to={next.fields.slug}>
                      <div className="post-preview-container">{next.frontmatter.title}</div>
                    </Link>
                  )}
                </>
              )}
            </div>
          </NextRead>
        </article>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      excerpt(pruneLength: 160)
      frontmatter {
        title
        description
        tags
        date(formatString: "MMMM Do, YYYY")
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`;

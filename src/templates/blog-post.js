import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/layout/layout.component';
// import Img from '../components/image/img.component';
import Img from 'gatsby-image';

import './blog-post.styles.scss';

import {
  ArticleContainer,
  ArticleHeader,
  ArticleDate,
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
} from '../styles/PostStyles';

const shortcodes = { Link }; // Provide common components here

export default ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx;
  const { previous, next } = pageContext;
  const featuredImgFluid = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.fluid
    : null;

  return (
    <Layout page={frontmatter.title} description={frontmatter.description} isBlogPost>
      <div className="wrapper">
        <ArticleContainer className="content-container blog-post with-padding">
          <ArticleHeader>{frontmatter.title}</ArticleHeader>
          <ArticleDate>{frontmatter.date}</ArticleDate>
          <Img fluid={featuredImgFluid} />
          <div className="markdown">
            <MDXProvider
              components={{
                h1: ArticleH2, // H1 reserved for article semantic title
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
          {previous === false ? null : (
            <>
              {previous && (
                <Link to={previous.fields.slug}>
                  <p>{previous.frontmatter.title}</p>
                </Link>
              )}
            </>
          )}
          {next === false ? null : (
            <>
              {next && (
                <Link to={next.fields.slug}>
                  <p>{next.frontmatter.title}</p>
                </Link>
              )}
            </>
          )}
        </ArticleContainer>
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

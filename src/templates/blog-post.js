import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Img from 'gatsby-image';

import styled from 'styled-components';
// import tw from 'twin.macro';

import Layout from '../components/layout/layout.component';

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

// const shortcodes = { Link }; // Provide common components here

const NextRead = styled.section`
  h5 {
    text-transform: uppercase;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;

    a {
      background: none;
      border-radius: 4px;
      border: 2px solid var(--accent);
      padding: 1rem;
      text-decoration: none;
    }

    a:hover {
      background: var(--accent-secondary);
      color: var(--default-text-inverted);
    }

    .post-preview-container {
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    @media (max-width: 330px) {
      .gatsby-image-wrapper {
        height: 250px;
      }

      h2.post-subtitle {
        color: var(--text-secondary);
        font-size: 0.75rem;
      }

      .post-body {
        figure {
          img {
            height: 250px;
          }
        }
      }

      .container {
        display: grid;
        grid-template-columns: 1fr;
        grid-row-gap: 1rem;
      }
    }
  }
`;

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

          <NextRead className="next-read">
            <h5>Next Read</h5>
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

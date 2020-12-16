import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import SEO from './seo';
import Header from './header';
import Footer from './footer';
import Image from './image';

import '../scss/main.scss';

const Layout = ({
  page,
  children,
  hideHeader,
  hideFooter,
  invisible,
  className,
  isBlogPost,
  description,
  mainTitle,
  mainHeroImage,
  mainHeroImageAlt,
  invertMainImageFilter,
}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="root-container">
      <SEO title={page} description={description} isBlogPost={isBlogPost} />
      <a className="a11y-skip-link" href="#content">
        Skip to Main Content
      </a>
      <Header hide={hideHeader} invisible={invisible} />
      <div id="content" />
      <main className={className}>
        <div className="title-container">
          {mainHeroImage ? (
            <div className={`hero-image-container ${invertMainImageFilter && 'invert'}`}>
              <Image className="blog-hero-image" fileName={mainHeroImage} alt={mainHeroImageAlt} />
              <h1>{mainTitle}</h1>
            </div>
          ) : (
            <h1>{mainTitle}</h1>
          )}
        </div>
        {children}
      </main>
      <Footer hide={hideFooter} />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

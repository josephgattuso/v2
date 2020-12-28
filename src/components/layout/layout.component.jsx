import React from 'react';
import PropTypes from 'prop-types';
import SEO from '../seo/seo.component';
import Header from '../header/header.component';
import Footer from '../footer/footer.component';
import Image from '../image/image.component';

import '../../styles/main.scss';
import styled from 'styled-components';

const TitleContainer = styled.div`
  max-width: calc(768px - (1rem * 2) - (0.3rem * 2));
  width: 100%;
  margin: 0 auto;
`;

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
  return (
    <div className="root-container">
      <SEO title={page} description={description} isBlogPost={isBlogPost} />
      <a className="a11y-skip-link" href="#content">
        Skip to Main Content
      </a>
      <Header hide={hideHeader} invisible={invisible} />
      <div id="content" />
      <main className={className}>
        <TitleContainer>
          {mainHeroImage ? (
            <div className={`hero-image-container ${invertMainImageFilter && 'invert'}`}>
              <Image
                className="blog-hero-image"
                fileName={mainHeroImage}
                alt={mainHeroImageAlt}
              ></Image>
              <h1>{mainTitle}</h1>
            </div>
          ) : (
            <h1>{mainTitle}</h1>
          )}
        </TitleContainer>
        {children}
      </main>
      <Footer hide={hideFooter} />
    </div>
  );
};

Layout.propTypes = {
  page: PropTypes.string,
  children: PropTypes.node.isRequired,
  hideHeader: PropTypes.bool,
  hideFooter: PropTypes.bool,
  invisible: PropTypes.bool,
  className: PropTypes.string,
  isBlogPost: PropTypes.bool,
  description: PropTypes.string,
  mainTitle: PropTypes.string,
  mainHeroImage: PropTypes.string,
  mainHeroImageAlt: PropTypes.string,
  invertMainImageFilter: PropTypes.bool,
};

Layout.defaultProps = {
  page: '',
  hideHeader: false,
  hideFooter: false,
  invisible: false,
  className: '',
  isBlogPost: false,
  description: '',
  mainTitle: '',
  mainHeroImage: '',
  mainHeroImageAlt: '',
  invertMainImageFilter: false,
};

export default Layout;

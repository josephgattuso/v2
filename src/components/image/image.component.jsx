import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

/*
 * Reusable Image component from StackOverflow user RodrigoLeon
 * https://stackoverflow.com/a/56508865
 */

const Image = ({ className, fileName, alt, objectFit, objectPosition }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => {
        return n.node.relativePath.includes(fileName);
      });
      if (!image) {
        return null;
      }

      return (
        <Img
          className={className}
          alt={alt}
          fluid={image.node.childImageSharp.fluid}
          imgStyle={{
            objectFit: objectFit,
            objectPosition: objectPosition,
          }}
        />
      );
    }}
  />
);

Image.propTypes = {
  className: PropTypes.string,
  fileName: PropTypes.string,
  alt: PropTypes.string,
  objectFit: PropTypes.string,
  objectPosition: PropTypes.string,
};

Image.defaultProps = {
  className: '',
  fileName: 'profile',
  alt: 'Joseph Gattuso',
  objectFit: 'fill',
  objectPosition: '50% 50%',
};

export default Image;

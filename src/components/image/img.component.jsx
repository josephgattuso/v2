import React from 'react';
import Img from 'gatsby-image';

export default function WhyDoINeedToMakeThisComponent({ image, ...theRest }) {
  if (!image) {
    return null;
  }
  if (image.extension === 'gif') {
    return <img src={image.publicURL} {...theRest} />;
  }
  return <Img fluid={image.childImageSharp.fluid} {...theRest} />;
}

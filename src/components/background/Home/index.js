import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';

import BackgroundImage from 'gatsby-background-image';

export default function BackgroundSection({ children }) {
  return (
    <StaticQuery
      query={graphql`
            query {
                desktop: file(relativePath: { eq: "gatsby-astronaut.png" }) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid_withWebp
                    }
                }
                }
            }
            `}
      render={(data) => {
        // Set ImageData.
        const imageData = data.desktop.childImageSharp.fluid;
        return (
          <BackgroundImage
            Tag="section"
            fluid={imageData}
            backgroundColor="#040e18"
          >
            { children }
          </BackgroundImage>
        );
      }
            }
    />
  );
}

BackgroundSection.propTypes = {
  children: PropTypes.node.isRequired,
};

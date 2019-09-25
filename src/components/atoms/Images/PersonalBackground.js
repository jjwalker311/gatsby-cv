import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';

import BackgroundImage from 'gatsby-background-image';

export default function PersonalBackground({ children }) {
  return (
    <StaticQuery
      query={graphql`
            query {
                desktop: file(relativePath: { eq: "borneo_sunrise.jpg" }) {
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
            style={{
              height: 'calc(40vh)',
            }}
          >
            { children }
          </BackgroundImage>
        );
      }
            }
    />
  );
}

PersonalBackground.propTypes = {
  children: PropTypes.node.isRequired,
};

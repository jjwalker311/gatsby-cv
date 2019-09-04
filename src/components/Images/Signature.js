import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "signature.png" }) {
          childImageSharp {
            fixed(width: 180, height: 60)  {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `}
    render={data => <Img fixed={data.placeholderImage.childImageSharp.fixed} />}
  />
);

export default React.memo(Image);

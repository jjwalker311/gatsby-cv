/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/core';

import COLOURS from 'constants/colours';

import Header from 'components/organisms/Header';
import Footer from 'components/atoms/Footer';

import { LocaleProvider } from 'locale';

// TODO: Allow switching of language based on something
import ENGLISH from 'locale/lang/en.json';

import './Layout.css';

const Layout = ({ children, currentPage }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <LocaleProvider value={ENGLISH}>
        <div style={{ background: COLOURS.BACKGROUND.DEFAULT }}>
          <Header siteTitle={data.site.siteMetadata.title} currentPage={currentPage} />
          <div
            css={css`
              margin: 0 auto;
              max-width: 1080px;
              padding: 0;
              background: ${COLOURS.LIGHT};
            `}
          >
            <main>{children}</main>
          </div>
          <Footer />
        </div>
      </LocaleProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  currentPage: PropTypes.string.isRequired,
};

export default Layout;

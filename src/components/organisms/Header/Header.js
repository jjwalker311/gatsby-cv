import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { css } from '@emotion/core';

import BREAKPOINTS from 'constants/breakpoints';
import COLOURS from 'constants/colours';
import PAGES_URL from 'constants/pageUrl';
import PAGES from 'constants/pages';

import * as PROP_TYPES from 'constants/propTypes';

import Hamburger from 'components/organisms/Hamburger';
import Signature from 'components/atoms/Images/Signature';
import MobileSignature from 'components/atoms/Images/MobileSignature';
import OnlyDisplayWhen from 'components/utils/OnlyDisplayWhen';

import LocaleContext from 'locale';

import { CENTRE_CENTRE } from 'helpers/cssSnippets';

const StyledLink = ({ isSelected, ...props }) => (
  <Link
    css={css`
        transition: color 0.3s ease;
        color: ${isSelected ? COLOURS.TEXT.SELECTED : COLOURS.TEXT.DEFAULT};
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bold;
        &:hover {
          color: ${isSelected ? COLOURS.TEXT.SELECTED : COLOURS.TEXT.HOVER};
        }
      `}
    {...props}
  />
);

StyledLink.propTypes = {
  isSelected: PropTypes.bool,
};

StyledLink.defaultProps = {
  isSelected: false,
};

const StyledNav = ({ tabs, ...props }) => (
  <nav
    css={css`
          padding: 12px 0;
          background: ${COLOURS.LIGHT};
          border-bottom: 1px solid ${COLOURS.BORDER};
          @media (min-width: ${BREAKPOINTS.TABLET}px) {
            padding: 4px 0;
          }
        `}
    {...props}
  />
);

StyledNav.propTypes = {
  tabs: PROP_TYPES.TABS.isRequired,
};

const NthColumn = ({ n, children }) => (
  <div
    css={css`
      grid-column: ${n + 2};
      display: none;
      @media (min-width: ${BREAKPOINTS.TABLET}px) {
        display: block;
      }
    `}
  >
    {children}
  </div>
);

NthColumn.propTypes = {
  children: PropTypes.node.isRequired,
  n: PropTypes.number.isRequired,
};

const Header = ({ currentPage }) => {
  const lang = useContext(LocaleContext).tabs;

  // First column with Signature
  const columns = [
    <NthColumn n={0}>
      <Link to="/">
        <Signature />
      </Link>
    </NthColumn>,
  ];

  const tabs = [
    { caption: lang.employment, link: '/employment', page: PAGES.EMPLOYMENT },
    { caption: lang.skills, link: '/skills/', page: PAGES.SKILLS },
    { caption: lang.education, link: '/education/', page: PAGES.EDUCATION },
    { caption: lang.personal, link: '/personal/', page: PAGES.ABOUT_ME },
  ];

  // Remaining columns driven from props
  tabs.forEach(({ caption, page }, index) => {
    (
      columns.push(
        <NthColumn n={index + 1} key={caption}>
          <StyledLink to={PAGES_URL[page]} isSelected={currentPage === page}>
            {caption}
          </StyledLink>
        </NthColumn>,
      )
    );
  });

  return (
    <header>
      {/* { lang.tabs.employment } */}
      <StyledNav tabs={tabs} role="navigation">

        <div
          css={css`
            display: grid;
            grid-template-columns: 1fr 3fr repeat(${tabs.length}, 1fr);
            grid-auto-rows: auto;
            grid-gap: 1em;
            ${CENTRE_CENTRE}
            width: 55%;
            text-align: center;
          `}
        >
          { columns }
        </div>
        <Hamburger>
          {displayed => (
            tabs.map(({ caption, link }, index) => (
              <StyledLink to={link}>
                <li
                  tabIndex={displayed ? (index + 1) : -1}
                  css={css`border-bottom: 1px solid ${COLOURS.BORDER};`}
                >
                  {caption}
                </li>
              </StyledLink>
            ))
          )
        }
        </Hamburger>

        <OnlyDisplayWhen
          mobile
          cssOverrides={css`
            position: absolute;
            top: 0;
            height: 55px;
            display: flex;
            ${CENTRE_CENTRE}
            width: 100%;
          `}
        >
          <Link to="/" style={{ width: '135px', zIndex: '30' }} tabIndex={0}>
            <MobileSignature />
          </Link>
        </OnlyDisplayWhen>
      </StyledNav>
    </header>
  );
};

Header.propTypes = {
  currentPage: PropTypes.string.isRequired,
};

export default Header;

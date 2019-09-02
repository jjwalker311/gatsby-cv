import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { css } from '@emotion/core';

import { BREAKPOINTS, COLOURS, PAGES } from 'constants';
import * as PROP_TYPES from 'constants/propTypes';

import Hamburger from 'components/Hamburger';

const { t } = useTranslation();

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
  isSelected: PropTypes.bool.isRequired,
};

const StyledNav = ({ tabs, ...props }) => (
  <nav
    css={css`
          padding: 12px 0;
          background: ${COLOURS.LIGHT};
          @media (min-width: ${BREAKPOINTS.TABLET}px) {
            padding: 26px 0;
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
      grid-column: ${n};
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
  children: PROP_TYPES.ANY_CHILDREN.isRequired,
  n: PropTypes.number.isRequired,
};

const Header = ({ tabs, currentPage }) => (
  <header>
    <StyledNav tabs={tabs} role="navigation">
      <div
        css={css`
        display: grid;
        grid-template-columns: repeat(${tabs.length}, 1fr);
        grid-auto-rows: auto;
        grid-gap: 1em;
        align-items: center;
        text-align: center;
        `}
      >
        {
        tabs.map(({ caption, link, page }, index) => (
          <NthColumn n={index + 1} key={`${caption}-${index}`}>
            <StyledLink to={link} isSelected={currentPage === page}>
              {caption}
            </StyledLink>
          </NthColumn>
        ))
      }

      </div>
      <Hamburger>
        {
          tabs.map(({ caption, link }) => (
            <StyledLink to={link}>
              <li>{caption}</li>
            </StyledLink>
          ))
        }
      </Hamburger>
    </StyledNav>
  </header>
);

Header.propTypes = {
  tabs: PROP_TYPES.TABS,
  currentPage: PropTypes.string.isRequired,
};

Header.defaultProps = {
  tabs: [
    { caption: t('Employment'), link: '/employment/', page: PAGES.EMPLOYMENT },
    { caption: t('Skills'), link: '/skills/', page: PAGES.SKILLS },
    { caption: t('Education'), link: '/education/', page: PAGES.EDUCATION },
    { caption: t('Personal'), link: '/personal/', page: PAGES.ABOUT_ME },
  ],
};

export default Header;

import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { css } from '@emotion/core';

import BREAKPOINTS from 'constants/breakpoints';
import COLOURS from 'constants/colours';
import PAGES_URL from 'constants/pageUrl';

import * as PROP_TYPES from 'constants/propTypes';

import Hamburger from 'components/organisms/Hamburger';
import Signature from 'components/atoms/Images/Signature';
import MobileSignature from 'components/atoms/Images/MobileSignature';

import { CENTRE_CENTRE } from 'helpers/cssSnippets';

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
  children: PROP_TYPES.ANY_CHILDREN.isRequired,
  n: PropTypes.number.isRequired,
};

const Header = ({ tabs, currentPage }) => {
  // First column with Signature
  const columns = [
    <NthColumn n={0}>
      <Link to="/">
        <Signature />
      </Link>
    </NthColumn>,
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

  const displayOnMobile = `display: flex;
  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    display: none;
  }`;

  return (
    <header>
      <StyledNav tabs={tabs} role="navigation">

        <div
          css={css`
        display: grid;
        grid-template-columns: 1fr 2fr repeat(${tabs.length}, 1fr);
        grid-auto-rows: auto;
        grid-gap: 1em;
        ${CENTRE_CENTRE}
        width: 50%;
        `}
        >
          { columns }
        </div>
        <Hamburger>
          {
          tabs.map(({ caption, link }) => (
            <StyledLink to={link}>
              <li css={css`border-bottom: 1px solid ${COLOURS.BORDER};`}>{caption}</li>
            </StyledLink>
          ))
        }
        </Hamburger>
        <div
          css={css`
            position: absolute;
            top: 0;
            height: 55px;
            display: flex;
            ${CENTRE_CENTRE}
            width: 100%;
            ${displayOnMobile}
          `}
        >
          <Link to="/">
            <MobileSignature />
          </Link>
        </div>
      </StyledNav>
    </header>
  );
};

Header.propTypes = {
  tabs: PROP_TYPES.TABS,
  currentPage: PropTypes.string.isRequired,
};

Header.defaultProps = {
  tabs: [
    // { caption: t('Employment'), link: '/employment', page: PAGES.EMPLOYMENT },
    // { caption: t('Skills'), link: '/skills/', page: PAGES.SKILLS },
    // { caption: t('Education'), link: '/education/', page: PAGES.EDUCATION },
    // { caption: t('Personal'), link: '/personal/', page: PAGES.ABOUT_ME },
    { caption: t('Employment'), link: '/employment', page: 'EMPLOYMENT' },
    { caption: t('Skills'), link: '/skills/', page: 'EMPLOYMENT'  },
    { caption: t('Education'), link: '/education/', page: 'EMPLOYMENT'  },
    { caption: t('Personal'), link: '/personal/', page: 'EMPLOYMENT'  },
  ],
};

export default Header;

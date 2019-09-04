import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import { BREAKPOINTS } from 'constants';

export default function ResponsivePanel(props) {
  const {
    breakpointAction,
    textAlign,
    itemAlign,
    responsiveStructure,
    children,
  } = props;

  return (
    <div css={css`margin: auto 0;`}>
      <div
        css={css`
              align-items: ${itemAlign};
              text-align: ${textAlign};
              height: 100vh;
              align-items: center;
              @media (min-width: ${breakpointAction}px) {
                display: grid;
                grid-template-columns: ${responsiveStructure};
                grid-auto-rows: auto;
                grid-gap: 0;
              }
            `}
      >
        { children }
      </div>
    </div>
  );
}

ResponsivePanel.propTypes = {
  breakpointAction: PropTypes.number,
  textAlign: PropTypes.string,
  itemAlign: PropTypes.string,
  responsiveStructure: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

ResponsivePanel.defaultProps = {
  breakpointAction: BREAKPOINTS.TABLET,
  textAlign: 'left',
  itemAlign: 'left',
};

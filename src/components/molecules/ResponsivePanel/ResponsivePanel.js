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
              align-items: center;
              display: grid;
              grid-template-columns: 1fr;
              grid-auto-rows: auto;
              grid-gap: 0;
              @media (min-width: ${breakpointAction}px) {
                grid-template-columns: ${responsiveStructure};
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

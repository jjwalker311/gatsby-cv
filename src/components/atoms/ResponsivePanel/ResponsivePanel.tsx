import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { css } from '@emotion/core';

import BREAKPOINTS from 'constants/breakpoints';

export default function ResponsivePanel(props: InferProps<typeof ResponsivePanel.propTypes>) {
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
  // When should the Grid format change to stacked (in pixels)
  breakpointAction: PropTypes.number,
  // Where should the Text should align within panel
  textAlign: PropTypes.string,
  // Where should the items within panel align
  itemAlign: PropTypes.string,
  // Defined grid structure (based CSS Grid)
  responsiveStructure: PropTypes.string.isRequired,
  // Children to render
  children: PropTypes.node.isRequired,
};

ResponsivePanel.defaultProps = {
  breakpointAction: BREAKPOINTS.TABLET,
  textAlign: 'left',
  itemAlign: 'left',
};

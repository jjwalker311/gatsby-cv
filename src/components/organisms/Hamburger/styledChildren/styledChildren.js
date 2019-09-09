import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';

import COLOURS from 'constants/colours';

export function HamburgerSpan() {
  return (
    <span
      css={css`
            display: block;
            width: 33px;
            height: 5px;
            margin-bottom: 5px;
            position: relative;
            background: ${COLOURS.PRIMARY};
            border-radius: 3px;
            z-index: 1;
            transform-origin: 4px 0px;
            transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
            background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
            opacity 0.55s ease;  
            left: 20px;
            top: 3px;
        
            &:first-child{
                transform-origin: 0% 0%;
            }  
        
            &:nth-last-child(2){
                transform-origin: 0% 100%;
            }
            `}
    />
  );
}

export function HamburgerInput(props) {
  return (
    <input
      css={css`
          display: block;
          width: 40px;
          height: 40px;
          position: absolute;
          top: -7px;
          left: 15px;
          cursor: pointer;
          opacity: 0; /* hide this */
          z-index: 2; /* and place it over the hamburger */
          -webkit-touch-callout: none;
    
          &:checked ~ span{
            opacity: 1;
            transform: rotate(45deg);
            background: ${COLOURS.SECONDARY};
          }
    
          &:checked ~ span:nth-last-child(3){
            opacity: 0;
            transform: rotate(0deg) scale(0.2, 0.2);
          }
    
          &:checked ~ span:nth-last-child(2){
            transform: rotate(-45deg);
          }
    
          &:checked ~ ul{
            transform: none;
          }
       `}
      {...props}
    />
  );
}

export function HamburgerMenu({ children }) {
  return (
    <ul
      css={css`
          position: absolute;
          width: 100%;
          margin: 13px 0px;
          padding: 0;
          background: ${COLOURS.LIGHT};
          list-style-type: none;
          text-align: center;
          -webkit-font-smoothing: antialiased;
          /* to stop flickering of text in safari */
          
          transform-origin: 0% 0%;
          transform: translate(-100%, 0);
          transition: transform 0.6s cubic-bezier(0.77,0.2,0.05,1.0);
        `}
    >
      {children}
    </ul>
  );
}

HamburgerMenu.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.any,
  ).isRequired,
};

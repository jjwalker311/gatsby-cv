import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { css } from '@emotion/core';

import { FAQ_CONTENT } from 'constants/propTypes';

export default function FrequentlyAskedQuestions({ title, content }) {
  // Create State for expanded FAQ, default to none selected
  const [expandedFAQ, setExpandedFAQ] = useState();

  /**
   * Expands or contracts a given FAQ
   * @param  {Integer} faqIndex
   */
  const faqTrigger = (faqIndex) => {
    if (expandedFAQ === faqIndex) {
      // This FAQ is currently selected, de-select it
      setExpandedFAQ();
    } else {
      // Not currently expanded, do so now
      setExpandedFAQ(faqIndex);
    }
  };

  return (
    <div>
      <h2>{title}</h2>
      {
        content.map(({ question, answer }, index) => {
          const openOrNot = classNames({ open: expandedFAQ === index });
          return (
            <div key={index} onClick={() => faqTrigger(index)} role="presentation">
              <p
                className={openOrNot}
                css={css`
                cursor:pointer;
                transition: color 0.25s ease;
                &.open {
                  color: pink;
                }
              `}
              >
                {question}
              </p>
              <div
                className={openOrNot}
                css={css`
                 max-height: 0;
                 transition: max-height 0.25s ease;
                 overflow: hidden;
                 &.open {
                    max-height: 1000px;
                    transition: max-height 1s ease;
                 }
               `}
              >
                <p>{answer}</p>
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

FrequentlyAskedQuestions.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(FAQ_CONTENT).isRequired,
};

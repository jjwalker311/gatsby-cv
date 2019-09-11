import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { css } from '@emotion/core';

import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';


import { FAQ_CONTENT } from 'constants/propTypes';
import COLOURS from 'constants/colours';
import POSITION from 'constants/positions';

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
    <div style={{ margin: '1em' }}>
      <Heading level={2} colour={COLOURS.DARK} textAlign={POSITION.LEFT}>{title}</Heading>
      {
        content.map(({ question, answer }, index) => {
          const openOrNot = classNames({ open: expandedFAQ === index });
          return (
            <div key={index} onClick={() => faqTrigger(index)} role="presentation">
              <Paragraph
                className={openOrNot}
                fontSize={20}
                overrideCss={css`
                cursor:pointer;
                margin: 0.5em 0;
                transition: color 0.25s ease;
                color: ${COLOURS.TEXT.DEFAULT};
                &.open {
                  color: ${COLOURS.TEXT.PINK};
                }
              `}
              >
                {question}
              </Paragraph>
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
                <Paragraph
                  color={COLOURS.TEXT.DEFAULT}
                  style={{ margin: '0.25em 0' }}
                >
                  {answer}
                </Paragraph>
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

FrequentlyAskedQuestions.propTypes = {
  // Title for FAQ section
  title: PropTypes.string.isRequired,
  // Array of FAQ questions and answers
  content: PropTypes.arrayOf(FAQ_CONTENT).isRequired,
};

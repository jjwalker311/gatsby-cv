import React from 'react';
import PropTypes from 'prop-types';

import ResponsivePanel from 'components/ResponsivePanel';

import renderLeftOrRight from 'helpers/leftOrRight';

import { POSITION } from 'constants';


function BulletList({ title, bulletPoints }) {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {
            bulletPoints.map(point => <li>{point}</li>)
        }
      </ul>
    </div>
  );
}

BulletList.propTypes = {
  title: PropTypes.string.isRequired,
  bulletPoints: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function BulletedImage({ image, imagePosition, ...props }) {
  return (
    <div>
      <ResponsivePanel responsiveStructure="1fr 1fr">
        { renderLeftOrRight(<BulletList {...props} />, <div>{image}</div>, imagePosition) }
      </ResponsivePanel>
    </div>
  );
}

BulletedImage.propTypes = {
  title: PropTypes.string.isRequired,
  bulletPoints: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imagePosition: PropTypes.oneOf([POSITION.LEFT, POSITION.RIGHT]),
};

BulletedImage.defaultProps = {
  imagePosition: POSITION.LEFT,
};

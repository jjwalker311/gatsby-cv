import React from 'react';
import PropTypes from 'prop-types';

import BulletedImage from 'components/molecules/BulletedImage';

export default function BulletImages({ tiles }) {
  return tiles.map(tileProps => (
    <BulletedImage {...tileProps} />
  ));
}

BulletImages.propTypes = {
  tiles: PropTypes.arrayOf(PropTypes.object).isRequired, // eslint-disable-line react/forbid-prop-types
};

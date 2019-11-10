import React from 'react';
import SVG from 'react-inlinesvg';
import propTypes from 'prop-types';

const Icon = ({ src, ...props }) => (
  <div {...props}>
    <SVG src={src} />
  </div>
);

Icon.propTypes = {
  src: propTypes.string.isRequired,
};

export default Icon;

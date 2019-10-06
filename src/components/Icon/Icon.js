import React from 'react';
import SVG from 'react-inlinesvg';

// TODO: dodać prop types
const Icon = ({ src, ...props }) => (
  <div {...props}>
    <SVG src={src} />
  </div>
);

export default Icon;

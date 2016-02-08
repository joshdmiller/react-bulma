import React from 'react';

/**
 * <Icon fa="github" />
 */
export default ({ fa, className = '', ...props }) => (
  <i className={`fa fa-${fa} ${className}`} {...props} />
);


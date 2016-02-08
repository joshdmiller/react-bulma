import TestUtils from 'react-addons-test-utils';

export const getShallowInstance = ( jsx ) => {
  const sr = TestUtils.createRenderer();
  sr.render( jsx );
  return sr.getRenderOutput();
};


import React from 'react';
import test from 'tape';
import Icon from './';
import { getShallowInstance } from '../../utils/spec-helpers';

test( 'Icon component', t => {
  let expected, actual;

  t.plan( 2 );
  
  const el = getShallowInstance( <Icon fa="github" /> );
  expected = 'i';
  actual = el.type;

  t.equals( actual, expected, 'renders an <i>' );

  t.ok( el.props.className.indexOf( 'fa fa-github' ) !== -1, 'has fa and icon classes' );
});


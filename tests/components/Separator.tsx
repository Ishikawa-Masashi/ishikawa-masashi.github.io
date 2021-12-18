import React from 'react';
import { shallow } from 'enzyme';

import { Separator } from '../../src';

describe('Separator', () => {
  it('Render without crash', () => {
    const component = shallow(<Separator />);
    expect(component.contains(<div className={'separator'} />)).toBe(true);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { Loader } from '../Loader';


describe('Loader', () => {
  test('should exist', () => {
    const component = shallow(<Loader />);
    expect(component).toBeTruthy();
    expect(component.length).toEqual(1);
  });
});

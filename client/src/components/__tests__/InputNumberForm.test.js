import React from 'react';
import { shallow } from 'enzyme';
import InputNumberForm from '../InputNumberForm';


describe('input', () => {
  test('should exist', () => {
    const component = shallow(<InputNumberForm />);
    const input = component.find('input[type="number"]');
    expect(input).toBeTruthy();
    expect(input.length).toEqual(1);
  });

  test('value should be', () => {
    const component = shallow(<InputNumberForm />);
    const input = component.find('input[type="number"]');
    expect(input.prop('value')).not.toBeNull();
    expect(input.prop('value')).not.toBeUndefined();
    expect(input.prop('value')).not.toBeNaN();
  });

  test('value should be greater then 0', () => {
    const component = shallow(<InputNumberForm />);
    const input = component.find('input[type="number"]');
    expect(input.prop('value')).toBeGreaterThan(0);
  });
});

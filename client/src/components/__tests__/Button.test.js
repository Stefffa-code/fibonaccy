import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '../Button';


describe('button', () => {
  test('should exist', () => {
    const mockCallBack = jest.fn();
    const btn = shallow(<Button onClick={mockCallBack} />);
    expect(btn).toBeTruthy();
    expect(btn.length).toEqual(1);
  });

  test('onClick should call function', () => {
    const mockCallBack = jest.fn();
    const btn = shallow(<Button onClick={mockCallBack} />);
    btn.simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});

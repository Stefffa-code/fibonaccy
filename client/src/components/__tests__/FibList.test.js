import React from 'react';
import { shallow } from 'enzyme';
import { FibList } from '../FibList';


describe('FibList', () => {
  const data = [
    {
      IP: '127.0.0.1',
      order: 2,
      id: 3,
      fibonaccy: 1,
      date: '2020-05-08T08:01:38.000Z',
    },
  ];
  const component = shallow(<FibList lists={data} />);

  test('should exist', () => {
    expect(component).toBeTruthy();
  });
});

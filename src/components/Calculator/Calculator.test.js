import React from 'react';
import { shallow } from 'enzyme';
import Calculator from './Calculator';

// Assign variables to an instance of Calc with 5 and 10, and also numbers switched around.

const calculator = shallow(
  <Calculator />,
);

// Group your add test
describe('Check if the add method works as inteded', () => {
  test('Check is 2 + 3 is 5', () => {
    calculator.find('[aria-label="two"]').simulate('click');
    calculator.find('[aria-label="plus"]').simulate('click');
    calculator.find('[aria-label="three"]').simulate('click');
    calculator.find('[aria-label="equal"]').simulate('click');

    expect(calculator.find('[aria-label="result"]').props().value).toEqual(5);
  });
});

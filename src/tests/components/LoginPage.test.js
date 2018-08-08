import { shallow } from 'enzyme';
import React from 'react';
import { Header } from '../../components/Header';
import { LoginPage } from '../../components/LoginPage';

test('should render LoginPage correctly', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper)
    .toMatchSnapshot();
});

test('should call startLogin', () => {
  const startLogin = jest.fn();

  const wrapper = shallow(<Header startLogout={startLogin} />);

  wrapper.find('button').simulate('click');

  expect(startLogin).toHaveBeenCalled();
});

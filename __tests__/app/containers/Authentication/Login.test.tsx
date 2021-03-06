import Login from 'app/containers/Authentication/Login';
import { configureStore } from 'app/store';
import { shallow } from 'enzyme';
import * as React from 'react';

describe('Login Container', () => {
  const { store } = configureStore();
  const wrapper = shallow(<Login handleSelectPanel={Function} />, {
    context: {
      store,
    },
  });

  it('Should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

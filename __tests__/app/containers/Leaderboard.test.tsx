import Leaderboard from 'app/containers/Leaderboard';
import { configureStore } from 'app/store';
import { shallow } from 'enzyme';
import * as React from 'react';

describe('Leaderboard Container', () => {
  const { store } = configureStore();

  it('Should render Leaderboard', () => {
    const wrapper = shallow(<Leaderboard />, {
      context: {
        store,
      },
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('Should have props', () => {
    const wrapper = shallow(<Leaderboard />, {
      context: {
        store,
      },
    });
    expect(wrapper.props().players).toEqual(expect.any(Array));
  });
});

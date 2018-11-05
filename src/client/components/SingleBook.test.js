import React from 'react';
import SingleBook from './SingleBook';
import { shallow } from 'enzyme';

describe('Single book', () => {
  let wrapper;
  it('should render a single book', () => {
    wrapper = shallow(
      <SingleBook
        location={{
          state: { book: { volumeInfo: { title: 'harry potter' } } },
        }}
      />
    );

    expect(wrapper.containsMatchingElement(<h1>harry potter</h1>)).toBeTruthy();
  });
});

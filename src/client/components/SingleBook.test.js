import React from 'react';
import SingleBook from './singleBook';
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

    expect(wrapper.containsMatchingElement(<h2>harry potter</h2>)).toBeTruthy();
  });
});

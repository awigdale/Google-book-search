import React from 'react';
import SingleBook from './book';
import { mount } from 'enzyme';
import ReusableBook from './reusableBook';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Single book', () => {
  let wrapper;
  it('should render a single book', () => {
    wrapper = mount(
      <Router>
        <SingleBook
          location={{
            state: { book: { volumeInfo: { title: 'harry potter' } } },
          }}
        />
      </Router>
    );
    expect(wrapper.containsMatchingElement(<ReusableBook />));
  });
});

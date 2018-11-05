import React, { PropTypes } from 'react';
import App from './App';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = mount(
      <Router>
        <App />
      </Router>
    );
    expect(wrapper.contains(<h1>BOOK SEARCH</h1>));
  });
});

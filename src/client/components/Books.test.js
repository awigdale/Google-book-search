import React from 'react';
import { mount } from 'enzyme';
import Books from './books';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Books component', () => {
  let wrapper;
  it('has state', () => {
    wrapper = mount(<Books />);
    expect(wrapper.state('searchInput')).toEqual('');
    expect(wrapper.state('allBooks')).toHaveLength(0);
  });
  it('should have a functional submit button', () => {
    wrapper = mount(<Books />);
    const handleSubmit = spyOn(wrapper.instance(), 'handleSubmit');
    wrapper.setState({ searchInput: 'harry potter' });
    wrapper.find('button').simulate('click');
    expect(handleSubmit).toHaveBeenCalled();
  });
  it('renders a list of books', () => {
    wrapper = mount(
      <Router>
        <Books />
      </Router>
    );
    wrapper.setState({
      allBooks: [
        { volumeInfo: { title: 'harry potter' } },
        { volumeInfo: { title: 'harry potter2' } },
        { volumeInfo: { title: 'harry potter3' } },
      ],
    });
    expect(wrapper.hasClass('book_container'));
  });
  it('links to single book page', () => {
    wrapper = mount(
      <Router>
        <Books />
      </Router>
    );
    expect(wrapper.find({ to: '/:bookTitle' }));
  });
});

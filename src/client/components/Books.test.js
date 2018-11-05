import React from 'react';
import { shallow, mount } from 'enzyme';
import Books from './Books';

describe('Books component', () => {
  it('has state', () => {
    const wrapper = mount(<Books />);
    expect(wrapper.state('searchInput')).toEqual('');
    expect(wrapper.state('allBooks')).toHaveLength(0);
  });
  it('should have a functional submit button', () => {
    const wrapper = mount(<Books />);
    const handleSubmit = spyOn(wrapper.instance(), 'handleSubmit');
    wrapper.setState({ searchInput: 'harry potter' });
    wrapper.find('button').simulate('click');
    expect(handleSubmit).toHaveBeenCalled();
  });
  // it('renders a list of books', () => {
  //   const wrapper = mount(<Books />);
  //   wrapper.setState({
  //     allBooks: [
  //       { volumeInfo: { title: 'harry potter' } },
  //       { volumeInfo: { title: 'harry potter2' } },
  //       { volumeInfo: { title: 'harry potter3' } },
  //     ],
  //   });
  //   expect(wrapper.hasClass('book_container'));
  // });
});

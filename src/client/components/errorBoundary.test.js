import React from 'react';
import { mount } from 'enzyme';
import ErrorBoundary from './errorBoundary';

const ProblemChild = () => {
  return (
    <div>
      <h1>
        {book}
        .state
      </h1>
    </div>
  );
};

describe('Error Boundary test', () => {
  it('renders error with problem child', () => {
    const wrapper = mount(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>
    );
    expect(
      wrapper.containsMatchingElement(<h2>Oops, something went wrong.</h2>)
    ).toBeTruthy();
  });
});

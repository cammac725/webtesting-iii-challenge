import React from 'react';
import renderer from 'react-test-renderer';
import { render, cleanup } from 'react-testing-library';

import Dashboard from './Dashboard';

afterEach(cleanup);

describe('<Dashboard />', () => {

  it('should render without crashing', () => {
    render(<Dashboard />);
  })

})



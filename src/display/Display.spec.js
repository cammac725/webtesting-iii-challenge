import React from 'react'
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';

afterEach(cleanup);

describe('<Display />', () => {

  it('should render without crashing', () => {
    render(<Display />);
  });

  it('should return locked when both locked and closed are true', () => {
    const test = {
      locked: true,
      closed: true
    }
    const { getByText } = render(<Display isLocked={test} />)
    const text = getByText(/locked/i);
    expect(text).toBeInTheDocument()
  })

  it('should return unlocked when locked is false', () => {
    const test = {
      locked: false
    }
    const { getByText } = render(<Display isUnlocked={test} />)
    const text = getByText(/unlocked/i)
    expect(text).toBeInTheDocument()
  })

  test('should return open when both locked and closed are false', () => {
    const test = {
      locked: false,
      closed: false
    }
    const { getByText } = render(<Display isOpen={test} />)
    const text = getByText(/open/i)
    expect(text).toBeInTheDocument()
  })

})
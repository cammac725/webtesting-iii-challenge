import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library';
import renderer from 'react-test-renderer';
import Controls from './Controls';
import 'jest-dom/extend-expect';

afterEach(cleanup)

describe('<Controls />', () => {

  it('should render without crashing', () => {
    render(<Controls />);
  })

  it('should match the snapshot', () => {
    const tree = renderer.create(<Controls />);
    expect(tree.toJSON()).toMatchSnapshot()
  })

  it('should display lock gate if locked is false and closed is true', () => {
    const locked = false;
    const closed = true;
    const { getByText } = render(<Controls locked={locked} closed={closed} />);
    const text = getByText(/lock gate/i);
    expect(text).toBeInTheDocument();
  })

  it('should display open gate if locked is false and closed is true', () => {
    const locked = false;
    const closed = true;
    const { getByText } = render(<Controls locked={locked} closed={closed} />)
    const text = getByText(/open gate/i);
    expect(text).toBeInTheDocument();
  })

  test('checks that buttons are there', () => {
    const { queryByText } = render(<Controls />)
    const closeBtn = queryByText("Close Gate")
    expect(closeBtn).toBeInTheDocument();
  })

  test('if close button is called', () => {
    const mock = jest.fn();
    const { getByText } = render(<Controls closed={false} toggleClosed={mock} />)
    const closeBtn = getByText("Close Gate")
    fireEvent.click(closeBtn)
    expect(mock).toHaveBeenCalled()
  })

  test('if open button is called', () => {
    const mock = jest.fn();
    const { getByText } = render(<Controls closed={true} toggleClosed={mock} />)
    const openBtn = getByText("Open Gate")
    fireEvent.click(openBtn)
    expect(mock).toHaveBeenCalled()
  })

  test('if unlock button is called', () => {
    const mock = jest.fn()
    const { getByText } = render(
      <Controls closed={true} locked={true} toggleLocked={mock} />)
    const unlockBtn = getByText("Unlock Gate")
    fireEvent.click(unlockBtn)
    expect(mock).toHaveBeenCalled()
  })

  test('if lock button is called', () => {
    const mock = jest.fn()
    const { getByText } = render(
      <Controls closed={true} locked={false} toggleLocked={mock} />)
    const lockBtn = getByText("Lock Gate")
    fireEvent.click(lockBtn)
    expect(mock).toHaveBeenCalled()
  })

})









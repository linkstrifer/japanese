import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Button from './index'

afterEach(cleanup)

test('renders button with text', () => {
  const { getByText } = render(<Button>Click me</Button>)
  const button = getByText('Click me')
  expect(button).toBeInTheDocument()
})

test('renders button with text and click event', () => {
  const onClick = jest.fn()
  const { getByText } = render(<Button onClick={onClick}>Click me</Button>)
  const button = getByText('Click me')

  fireEvent.click(button)

  expect(onClick).toHaveBeenCalledTimes(1)
})

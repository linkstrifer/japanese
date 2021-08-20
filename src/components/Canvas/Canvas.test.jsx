import { screen, render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Canvas from 'components/Canvas'

afterEach(cleanup)

describe('Canvas', () => {
  describe('visual rendering', () => {
    it('renders undo button', () => {
      render(<Canvas />)

      expect(screen.queryByText('Undo')).toBeInTheDocument()
    })

    it('renders clear button', () => {
      render(<Canvas />)

      expect(screen.queryByText('Clear')).toBeInTheDocument()
    })
  })

  describe('interactions', () => {
    beforeEach(() => {
      jest.restoreAllMocks()
      jest.resetAllMocks()
    })

    it('undo button calls undo', () => {
      const undo = jest.fn()

      const { getByText } = render(<Canvas undo={undo} />)
      const button = getByText('Undo')

      fireEvent.click(button)

      expect(undo).toHaveBeenCalledTimes(1)
    })

    it('clear button calls undo', () => {
      const clear = jest.fn()

      const { getByText } = render(<Canvas clear={clear} />)
      const button = getByText('Clear')

      fireEvent.click(button)

      expect(clear).toHaveBeenCalledTimes(1)
    })
  })
})

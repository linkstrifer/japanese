import { fireEvent, render, screen } from '@testing-library/react'

import Word from 'components/Word'

const mockSpeak = jest.fn()

jest.mock('hooks/useTextToSpeech', () => () => mockSpeak)

describe('Word', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
    jest.resetAllMocks()
  })
  describe('visual rendering', () => {
    it('renders without text', () => {
      render(<Word>Hey, stranger</Word>)

      expect(screen.queryByText('Hey, stranger')).toBeNull()
    })

    it('renders with text', () => {
      render(<Word showWord={true}>Hey, stranger</Word>)

      expect(screen.queryByText('Hey, stranger')).toBeInTheDocument()
    })

    it('renders play button', () => {
      render(<Word>Hey, stranger</Word>)

      expect(screen.queryByText('Play')).toBeInTheDocument()
    })

    it('renders slow button', () => {
      render(<Word>Hey, stranger</Word>)

      expect(screen.queryByText('Slow')).toBeInTheDocument()
    })

    describe('interactions', () => {
      it('shows word after tap', () => {
        render(<Word>Hey</Word>)

        const button = screen.queryByText('---') as HTMLButtonElement

        fireEvent.click(button)

        expect(screen.queryByText('Hey')).toBeInTheDocument()
      })

      it('renders play button', () => {
        render(<Word>Hey, stranger</Word>)

        const button = screen.queryByText('Play') as HTMLButtonElement

        fireEvent.click(button)

        expect(mockSpeak).toHaveBeenCalled()
        expect(mockSpeak).toHaveBeenCalledWith()
      })

      it('renders slow button', () => {
        render(<Word>Hey, stranger</Word>)

        const button = screen.queryByText('Slow') as HTMLButtonElement

        fireEvent.click(button)

        expect(mockSpeak).toHaveBeenCalled()
        expect(mockSpeak).toHaveBeenCalledWith(0.5)
      })
    })
  })
})

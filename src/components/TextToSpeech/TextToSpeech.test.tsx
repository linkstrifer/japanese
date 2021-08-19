import { fireEvent, render, screen } from '@testing-library/react'

import TextToSpeech from './index'
describe('TextToSpeech', () => {
  describe('visual rendering', () => {
    it('renders with text', () => {
      render(<TextToSpeech>Hey, stranger</TextToSpeech>)

      expect(screen.queryByText('Hey, stranger')).toBeInTheDocument()
    })

    it('renders play button', () => {
      render(<TextToSpeech>Hey, stranger</TextToSpeech>)

      expect(screen.queryByText('Play')).toBeInTheDocument()
    })

    it('renders slow button', () => {
      render(<TextToSpeech>Hey, stranger</TextToSpeech>)

      expect(screen.queryByText('Slow')).toBeInTheDocument()
    })

    describe('interactions', () => {
      it('renders play button', () => {
        render(<TextToSpeech>Hey, stranger</TextToSpeech>)

        const button = screen.queryByText('Play')

        fireEvent.click(button)

        expect(speechSynthesis.speak).toHaveBeenCalled()
        expect(speechSynthesis.speak).toHaveBeenCalledWith({
          lang: 'ja-JP',
          rate: 1,
          text: 'Hey, stranger',
        })
      })

      it('renders slow button', () => {
        render(<TextToSpeech>Hey, stranger</TextToSpeech>)

        const button = screen.queryByText('Slow')

        fireEvent.click(button)

        expect(speechSynthesis.speak).toHaveBeenCalled()
        expect(speechSynthesis.speak).toHaveBeenCalledWith({
          lang: 'ja-JP',
          rate: 0.5,
          text: 'Hey, stranger',
        })
      })
    })
  })
})

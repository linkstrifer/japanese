import { fireEvent, render, screen } from '@testing-library/react'

import useTextToSpeech from 'hooks/useTextToSpeech'
import { unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

function Component() {
  const speak = useTextToSpeech({ message: 'Text' })

  return (
    <div>
      <button type="button" onClick={() => speak()}>
        Play
      </button>
      <button type="button" onClick={() => speak(0.5)}>
        Slow
      </button>
    </div>
  )
}

let container: any

describe('useTextToSpeech', () => {
  beforeEach(() => {
    // set up a DOM element as a render target
    container = document.createElement('div')
    document.body.appendChild(container)

    act(() => {
      render(<Component />, container)
    })
  })

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container)
    container.remove()
  })

  describe('interactions', () => {
    it('should play', () => {
      const button = screen.queryByText('Play') as HTMLButtonElement

      fireEvent.click(button)

      expect(speechSynthesis.speak).toHaveBeenCalled()
      expect(speechSynthesis.speak).toHaveBeenCalledWith({
        lang: 'ja-JP',
        rate: 1,
        text: 'Text',
      })
    })

    it('renders slow button', () => {
      const button = screen.queryByText('Slow') as HTMLButtonElement

      fireEvent.click(button)

      expect(speechSynthesis.speak).toHaveBeenCalled()
      expect(speechSynthesis.speak).toHaveBeenCalledWith({
        lang: 'ja-JP',
        rate: 0.5,
        text: 'Text',
      })
    })
  })
})

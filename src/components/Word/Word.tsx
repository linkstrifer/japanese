import { useState } from 'react'

import Button from 'components/Button'
import useTextToSpeech from 'hooks/useTextToSpeech'

type TextToSpeechProps = {
  children: string
  lang?: string
  showWord?: boolean
}
function TextToSpeech({
  children,
  lang = 'ja-JP',
  showWord: showWordProp = false,
}: TextToSpeechProps): JSX.Element {
  const [showWord, setShowWord] = useState(showWordProp)
  const speak = useTextToSpeech({ message: children, lang })

  return (
    <div className="w-full px-2 py-6 flex flex-col items-center rounded-xl m-2">
      <span>Tap to show</span>
      <button
        onClick={() => setShowWord(true)}
        className={`w-full my-4 border-b-4 text-center text-6xl p-2 ${
          showWord
            ? 'border-dotted border-primary-dark'
            : 'bg-primary-light text-primary-light rounded-xl'
        }`}
      >
        {showWord ? children : children.split('').map(() => '-')}
      </button>

      <div className="flex justify-between">
        <Button className="m-2" onClick={() => speak()}>
          Play
        </Button>
        <Button className="m-2" onClick={() => speak(0.5)}>
          Slow
        </Button>
      </div>
    </div>
  )
}
export default TextToSpeech

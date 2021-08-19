import { useCallback, useEffect, useState } from 'react'

type TextToSpeechProps = {
  children: string
  lang?: string
}

function TextToSpeech({
  children,
  lang = 'ja-JP',
}: TextToSpeechProps): JSX.Element {
  const [msg, setMsg] = useState<SpeechSynthesisUtterance | null>(null)

  const speak = useCallback(
    (rate = 1) => {
      /* istanbul ignore else */
      if (msg) {
        msg.rate = rate
        window.speechSynthesis.speak(msg)
      }
    },
    [msg]
  )

  useEffect(() => {
    const msg = new window.SpeechSynthesisUtterance()

    msg.lang = lang
    msg.text = children

    setMsg(msg)
  }, [])

  return (
    <div className="px-2 py-6 flex flex-col items-center bg-primary-800 text-white rounded-xl m-2">
      <span className="border-b-4 border-dotted border-primary-400 text-6xl p-2">
        {children}
      </span>

      <div className="flex">
        <button className="block" onClick={() => speak()}>
          Play
        </button>

        <button className="block" onClick={() => speak(0.5)}>
          Slow
        </button>
      </div>
    </div>
  )
}

export default TextToSpeech

import { useCallback, useEffect, useState } from 'react'

type useTextToSpeechProps = {
  message: string
  lang?: string
}

function useTextToSpeech({
  message,
  lang = 'ja-JP',
}: useTextToSpeechProps): (rate?: number) => void {
  const [msg, setMsg] = useState<SpeechSynthesisUtterance | null>(null)

  useEffect(() => {
    const msg = new window.SpeechSynthesisUtterance()

    msg.lang = lang
    msg.text = message

    setMsg(msg)
  }, [])

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

  return speak
}

export default useTextToSpeech

import './App.css'

import Canvas from './components/Canvas'
import TextToSpeech from './components/TextToSpeech/index'

function App(): JSX.Element {
  return (
    <div className="bg-background min-h-screen grid grid-rows-2">
      <div className="flex justify-center items-center">
        <TextToSpeech>ありがと</TextToSpeech>
      </div>
      <div>
        <Canvas />
      </div>
    </div>
  )
}

export default App

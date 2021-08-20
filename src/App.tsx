import './App.css'

import Canvas from 'components/Canvas'
import Word from 'components/Word'

function App(): JSX.Element {
  return (
    <div className="bg-background min-h-screen grid grid-rows-2">
      <div className="flex justify-center items-center">
        <Word>ありがと</Word>
      </div>
      <div>
        <Canvas />
      </div>
    </div>
  )
}

export default App

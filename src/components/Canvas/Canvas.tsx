import { useRef } from 'react'
import { ReactSketchCanvas } from 'react-sketch-canvas'
import Button from 'components/Button'

type CanvasProps = {
  undo?: () => void
  clear?: () => void
}
function Canvas({ undo, clear }: CanvasProps): JSX.Element {
  const canvas = useRef<ReactSketchCanvas>(null)

  return (
    <div className="h-full w-full relative">
      <ReactSketchCanvas
        style={{ border: '0' }}
        ref={canvas}
        strokeColor="black"
        strokeWidth={4}
      />

      <div className="absolute bottom-0 p-4 flex justify-around w-full">
        <Button
          onClick={() => {
            /* istanbul ignore else */
            if (clear) {
              clear()
            } else {
              if (canvas) canvas.current?.clearCanvas()
            }
          }}
        >
          Clear
        </Button>
        <Button
          onClick={() => {
            /* istanbul ignore else */
            if (undo) {
              undo()
            } else {
              if (canvas) canvas.current?.undo()
            }
          }}
        >
          Undo
        </Button>
      </div>
    </div>
  )
}
export default Canvas

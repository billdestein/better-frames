import React from 'react'
import Canvas from '../lib/Canvas'
import Frame from '../lib/Frame'
import { Geometry } from '../lib/types'

export function AddRemove(): React.JSX.Element {
  const canvas = new Canvas()

  const geometry: Geometry = {
    height: 200,
    width: 200,
    x: 100,
    y: 100,
    z: 100
  }

  const canvasRef = (div: any) => {
    if (div !== null) {
      canvas.initialize(div)
    }
  }

  return (
    <Frame
      buttons={[]}
      canvas={canvas}
      geometry={geometry}
      isIframe
      onResize={() => {}}
      title={'Title'}
    >
      <div ref={canvasRef}>Div</div>
    </Frame>
  )
}


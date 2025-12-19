import React from 'react'
import styled from 'styled-components'
import Canvas from './Canvas'
import FrameTitle from './FrameTitle'
import FrameButtons from './FrameButtons'
import type { Button } from './types'

type Props = {
  buttons: Button[]
  canvas: Canvas
  height: number
  onMouseDown: (event: any) => void
  title: string
}

const FrameHeader: React.FunctionComponent<Props> = (props) => {
  const { buttons, canvas, height, onMouseDown, title } = props
  const Header = styled.div`
    background-color: #eeeeee;
    border-bottom: 1px solid gray;
    box-sizing: border-box;
    cursor: move;
    display: block;
    height: ${height}px;
    line-height: ${height}px;
  `

  //----------------------------------------------------------------------------------------------
  //  render
  //----------------------------------------------------------------------------------------------
  return (
    <Header onMouseDown={onMouseDown}>
      <FrameTitle title={title} />
      <FrameButtons canvas={canvas} buttons={buttons} />
    </Header>
  )
}

export default FrameHeader

import React from 'react'
import styled from 'styled-components'

type Props = {
  title: string
}

const FrameTitle: React.FunctionComponent<Props> = (props) => {
  const { title } = props

  const Title = styled.div`
    display: inline-block;
    float: left;
    padding-left: 4px;
  `

  //----------------------------------------------------------------------------------------------
  // render
  //----------------------------------------------------------------------------------------------
  return <Title>{title}</Title>
}

export default FrameTitle

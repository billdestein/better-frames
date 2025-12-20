import React from 'react'
import styled from 'styled-components'
import { MoveAndResize } from './examples/MoveAndResize'
import { Iframe } from './examples/Iframe'
import { Example } from './types'

const examples: Example[] = [
  {
    name: 'Move and resize',
    element: <MoveAndResize/>
  },
  {
    name: 'Iframe',
    element: <Iframe/>
  }
]

const LeftNav = styled.div`
    background-color: midnightblue;
    color: white;
    height: 100%;
`

const Option = styled.div`
    border-bottom: 1px solid white;
    color: white;
    padding: 10px 20px 10px 10px;
    &:hover {
        background-color: royalblue;
        cursor: pointer;
        width: 100%;
    }
`

interface Props {
  exampleSelected: (example: Example) => void
}

export const Left: React.FunctionComponent<Props> = (props) => {
  const { exampleSelected } = props

  const renderOption = (example: Example) => {
    return (
      <Option key = {example.name} onClick={ () => exampleSelected(example) }>
        {example.name}
      </Option>
    )
  }

  return (
    <LeftNav>
      { examples.map(e => renderOption(e))}
    </LeftNav>
  )
}

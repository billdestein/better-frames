import React from 'react'
import styled from 'styled-components'
import { AddRemove } from './examples/AddRemove'
import { Iframe } from './examples/Iframe'
import { Example } from './types'

const examples: Example[] = [
  {
    name: 'Add and remove frames',
    element: <AddRemove/>
  },
  {
    name: 'Iframe',
    element: <Iframe/>
  }
]

const LeftNav = styled.div`
    background-color: blue;
    color: white;
    height: 100%;
`

const Option = styled.div`
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

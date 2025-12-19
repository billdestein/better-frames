import React, { useState } from 'react'
import styled from 'styled-components'
import { AddRemove } from './AddRemove'
import { Iframe } from './Iframe'

type Example = {
  name: string
  element: React.JSX.Element
}

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

const Container = styled.div`
      display: flex;
      flex-direction: row;
      height: 100vh;
`

const Left = styled.div`
    background-color: blue;
    color: white;
    height: 100%;
`

const Option = styled.div`
    color: white;
    padding: 10px;
    &:hover {
        background-color: royalblue;
        cursor: pointer;
        width: 100%;
    }
`

function App() {
  const [ example, setExample ] = useState<Example>(examples[0])

  const onClick = (exampleName: string) =>{
    console.log(`onClick: ${exampleName}`)
    const example = examples.find(e => e.name == exampleName)
    setExample(example as Example)
  }

  const renderOption = (example: Example) => {
    return (
      <Option
        key = {example.name}
        onClick={ () => onClick(example.name) }
      >
        {example.name}
      </Option>
    )
  }

  const renderLeft = () => {
    return (
      <Left>
        { examples.map(e => renderOption(e))}
      </Left>
    )
  }

  return (
    <Container>
      { renderLeft() }
      { example.element }
    </Container>
  )
}

export default App

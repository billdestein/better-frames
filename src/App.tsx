import React, { useState } from 'react'
import styled from 'styled-components'
import { Example } from './types'
import { Left } from './Left'
import { Right } from './Right'

const Container = styled.div`
      display: flex;
      flex-direction: row;
      height: 100vh;
`

const LeftDiv = styled.div`
    height: 100%;
`

const MiddleDiv = styled.div`
    background-color: tan;
    width: 30%;
`

const RightDiv = styled.div`
    background-color: green;
    color: black;
    flex-grow: 1;
    height: 100%;
`

function App() {
  const [ example, setExample ] = useState<Example | null>(null)

  const exampleSelected = (example: Example) => {
    setExample(example)
    console.log('exampleSelected')
  }

  return (
    <Container>
      <LeftDiv>
        <Left exampleSelected={exampleSelected}/>
      </LeftDiv>
      <MiddleDiv>
        Hello
      </MiddleDiv>
      <RightDiv>
        <Right example={example}/>
      </RightDiv>
    </Container>
  )
}

export default App

import React from 'react'
import styled from 'styled-components'
import { Example, Left } from './Left'

const Container = styled.div`
      display: flex;
      flex-direction: row;
      height: 100vh;
`

const LeftDiv = styled.div`
    background-color: blue;
    color: white;
    height: 100%;
`

const RightDiv = styled.div`
    background-color: white;
    color: black;
    height: 100%;
`

function App() {
  const exampleSelected = (example: Example) => {
    alert('exampleSelected')
    console.log('exampleSelected')
    console.log(JSON.stringify(example))
  }

  return (
    <Container>
      <LeftDiv>
        <Left exampleSelected={exampleSelected}/>
      </LeftDiv>
      <RightDiv>right</RightDiv>
    </Container>
  )
}

export default App

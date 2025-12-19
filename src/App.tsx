import React, { useState } from 'react'
import styled from 'styled-components'
import { AddRemove } from './AddRemove'
import { Iframe } from './Iframe'

type Example = {
  name: string
  element: () => React.JSX.Element
}

const examples: Example[] = [
  {
    name: 'Add and remove frames',
    element: AddRemove
  },
  {
    name: 'Iframe',
    element: Iframe
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

const Right = styled.div`
      background-color: yellow;
      flex-grow: 1;
      height: 100%;
  `

function App() {
  // const [ exampleNumber, setExampleNumber ] = useState<number>(0)

  const onClick = () =>{
    alert('Hello')
  }

  const renderOption = (example: Example) => {
    return (
      <Option onClick={ onClick }>{example.name}</Option>
    )
  }

  const renderLeft = () => {
    return (
      <Left>
        { examples.map(e => renderOption(e))}
      </Left>
    )
  }

  const renderRight = () => {
    return <Right>Right</Right>
  }

  return (
    <Container>
      { renderLeft() }
      { renderRight() }
    </Container>
  )
}

export default App











// import React from 'react'
// import Example from './lib/Example'
//
// function App() {
//    return (
//       <div className="container">
//          <header className="py-5 border-b mb-5">
//             <h1 className="mb-1">React NPM Starter</h1>
//          </header>
//          <div className="flex gap-2">
//             <Example label="Link Button" url="https://github.com/dcooney" />
//             <Example label="Form Button" />
//          </div>
//       </div>
//    )
// }
//
// export default App

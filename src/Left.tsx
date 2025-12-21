import React from 'react'
import styled from 'styled-components'
import { Example } from './types'
import { Iframe } from './examples/Iframe'
import './MarkdownStyles.css';
import { MoveAndResize } from './examples/MoveAndResize'
import { Restack } from './examples/Restack'
import ReactMarkdown from 'react-markdown'

const moveAndResizeMarkdown = `
# Move and resize
&nbsp;  
All frames can be moved and resized.  
&nbsp;  
To move a frame, simply grab the frame header and move your mouse.  
&nbsp;  
To resize a frame, simply grab on a corner or side of the mouse, and move your mouse.  
&nbsp;    
`

const restackMarkdown = `
# Restack
&nbsp;  
All frames can be restacked.  
`

const iframesMarkdown = `
# Iframes
&nbsp;  
First paragraph  
&nbsp;    
Second paragraph
`

const examples: Example[] = [
  {
    name: 'Move and resize',
    element: <MoveAndResize/>,
    markdown: <div className="markdown-body"><ReactMarkdown>{moveAndResizeMarkdown}</ReactMarkdown></div>
  },
  {
    name: 'Restack',
    element: <Restack/>,
    markdown: <div className="markdown-body"><ReactMarkdown>{restackMarkdown}</ReactMarkdown></div>
  },
  {
    name: 'Iframe',
    element: <Iframe/>,
    markdown: <div className="markdown-body"><ReactMarkdown>{iframesMarkdown}</ReactMarkdown></div>
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




import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Example } from "./types";

const Container = styled.div`
    height: 100vh;
`

interface Props {
  example: Example | null
}

export const Right: React.FunctionComponent<Props> = (props) => {
  const {example} = props
  const containerRef = useRef(null);
  const [ isContainerRendered, setIsContainerRendered ] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      setIsContainerRendered(true);
    }
  }, []);

  const renderContents = (): React.JSX.Element | null => {
    if (example === null) {
      return <div/>
    }

    if ( !isContainerRendered ) {
      return <div/>
    }

    return example.element
  }

  return (
    <Container ref={containerRef} id="container">
      { renderContents() }
    </Container>
  );
}

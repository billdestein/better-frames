import React, { useEffect, useRef, useState } from 'react'
import { Example } from "./types";

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
    <div ref={containerRef} id="container">
      { renderContents() }
    </div>
  );
}

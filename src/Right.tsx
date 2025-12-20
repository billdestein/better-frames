import React, { useEffect, useRef, useState } from 'react'
import { Example } from "./types";

interface Props {
  example: Example | null
}

export const Right: React.FunctionComponent<Props> = (props) => {
  const {example} = props
  const wrapperRef = useRef(null);
  const [ isWrapperRendered, setIsWrapperRendered ] = useState(false);

  useEffect(() => {
    if (wrapperRef.current) {
      setIsWrapperRendered(true);
    }
  }, []);

  const renderContents = (): React.JSX.Element | null => {
    if (example === null) {
      return <div/>
    }

    if ( !isWrapperRendered ) {
      return <div/>
    }

    return example.element
  }

  return (
    <div ref={wrapperRef} id="container">
      <div className="wrapper-contents">
        { renderContents() }
      </div>
    </div>
  );
}

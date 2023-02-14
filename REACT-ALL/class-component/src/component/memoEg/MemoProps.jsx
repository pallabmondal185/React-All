import React, {memo} from 'react'

//Using memo will cause React to skip rendering a component if its props have not changed.
// This can improve performance.

function MemoProps(props) {
    console.warn('rerendering');
  return (
    <>
      <h1>the data is: {props.data}</h1>
    </>
  )
}
export default memo(MemoProps);
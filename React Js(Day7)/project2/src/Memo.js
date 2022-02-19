import React from 'react'
function Memo({ name }) {
  console.log('Rendering MemoComponent')
  return (
    <div>
      {name}
    </div>
  )
}
export default React.memo(Memo)
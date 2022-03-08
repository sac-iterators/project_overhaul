import React, { useState } from 'react'

const Item = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className='item'>
      <header onClick={() => setExpanded(!expanded)}>
        <h6 className='item-title'>
          {title}
        </h6>
        <button className='btn'>
          {expanded ? <i class="fa-solid fa-minus"></i> : <i class="fa-solid fa-plus"></i>}
        </button>
      </header>
      {expanded && <div className='content'>{content}</div>}
    </article>
  )
}

export default Item
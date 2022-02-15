import React, { useState } from 'react'
const SingleQuestion = ({ title, info }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className='question'>
      <header onClick={() => setExpanded(!expanded)}>
        <h6 className='question-title'>
          {title}
        </h6>
        <button className='btn'>
          {expanded ? <i class="fa-solid fa-minus"></i> : <i class="fa-solid fa-plus"></i>}
        </button>
      </header>
      {expanded && <p>{info}</p>}
    </article>
  )
}

export default SingleQuestion
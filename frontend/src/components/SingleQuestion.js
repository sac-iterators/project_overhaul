import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const SingleQuestion = ({ title, info }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className='question'>
      <header onClick={() => setExpanded(!expanded)}>
        <h6 className='question-title'>
          {title}
        </h6>
        <button className='btn'>
          {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {expanded && <p>{info}</p>}
    </article>
  )
}

export default SingleQuestion
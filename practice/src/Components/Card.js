import React from 'react'

const Card = ({concept}) => {
  return (
    <div className='card'>
    <ul id="concepts">
        <li className="concept">
          <img src={concept.image} alt="TODO: TITLE" />
          <h2>{concept.title}</h2>
          <p>{concept.description}</p>
        </li>
      </ul>
      
    </div>
  )
}

export default Card

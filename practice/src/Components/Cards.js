import React from 'react'
import Card from './Card'

const Cards = ({concepts}) => {
  return (
    <div className='cards-container'>
    {
      concepts.map((concept)=>{
        return (
          <Card concept={concept}/>
        )
      })

    }
      
    </div>
  )
}

export default Cards

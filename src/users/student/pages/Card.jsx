import React from 'react'
import SmallCard from "./SmallCard.jsx";

const Card = () => {
  return (
    <div className='rounded bg-white w-96 m-4 '>
        <div className='bg-slate-300 p-2 rounded-t'>Jobs Applied</div>
        <SmallCard/>
        <SmallCard/>
        <br/>
    </div>
  )
}

export default Card
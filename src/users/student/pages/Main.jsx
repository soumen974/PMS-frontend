import React from 'react'
import Card from "./Card.jsx";

const Main = () => {
  return (
    <div className='bg-amber-200 h-full m-7  rounded-2xl p-7'>
        <div className='flex flex-wrap justify-center'>
            <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
    </div>
  )
}

export default Main
import React from 'react'
import SmallCard from "./SmallCard.jsx";
import {Link} from 'react-router-dom';

const Card = ({title}) => {
  let route;

  if (title === "Jobs Applied") {
    route = "/jobsApplied";
  } else if(title==="Apply for Jobs") {
    route = "/openJobs";
  }
  return (
    <div className='rounded bg-white w-96 m-4 '>
        {/* <div className='bg-slate-300 p-2 rounded-t'>Jobs Applied</div> */}
        <div className='bg-slate-300 p-2 rounded-t'></div>
        {/* <SmallCard/>
        <SmallCard/> */}
        <Link to={route} className='no-underline text-black'><div className='h-20 rounded text-lg no-underline bg-stone-400 m-3 flex items-center justify-center hover:bg-stone-500 hover:text-white '>{title}</div></Link>
        <br/>
    </div>
  )
}

export default Card
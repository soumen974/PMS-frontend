import React, { useEffect, useState  } from 'react'

export default function ApplyPost() {

    document.title = "Apply [Placement Module]";

    const [jobpost, setJobpost] = useState({
      title: "",  
      description: "", 
      company: "",
      employmentType:""
      
    });
    
  
  
    const [jobposts, setJobposts] = useState([]);
  
    useEffect(()=>{
     loadJobPost();
    },[]);
  
    const loadJobPost=()=>{
      fetch('http://localhost:8080/jobpostings')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((result) => {
        setJobposts(result);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  
    }

    
  
    
  return (
    <>
    <div className='mt-10 flex flex-col-reverse justify-between gap-2 '>
                                    
                                    {jobposts.map((jobpost, index) => (
                                      <div key={index} className= {`   opacity-2 transition ease-in-out  delay-150 -translate-y-1 scale-95 duration-300'  group `} >
                                      

                                        <div className='  grid  max max-sm:gap-4  sm:flex  p-[1rem]   rounded-[0.6rem] bg-gray-100'>
                                          <div className='bg-gray-200  p-2 sm:h-[8rem] sm:w-[8rem]  rounded-[0.4rem] flex items-center justify-center'>
                                            
                                          </div>

                                          <div className='mr-auto bg-green-00 px-7 ' >
                                            <ul className='list-disc md:grid grid-flow-col justify-start gap-8'> <li>Job title : {jobpost.title}</li> <li> Employment Type : {jobpost.employmentType}</li></ul>
                                            <div> </div>
                                            <div>{jobpost.description}</div>
                                          </div>
                                          <div className=' m-auto mb-1 justify-self-end'>
                                          <button className='  px-7 rounded-full border border-black '>Apply</button>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                    
                                  
                                  </div> 
    
    </>
  )
}

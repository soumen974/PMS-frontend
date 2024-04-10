import React, { useEffect, useState  } from 'react'
import Drawer from './Drawer';

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
    const postData = [
      {
         id: 1, 
         title: 'frontend',
       Company_name: "TCS", 
       package: '5LPA',
       location: 'Bangalore',
       Dead_line: '12jan2025',
       job_discription:'We are looking for a Front-End Web Developer who is motivated to combine the art of design with the art of programming. Responsibilities will include translation of the UI/UX design wireframes to actual code that will produce visual elements of the application. You will work with the UI/UX designer and bridge the gap between graphical design and technical implementation, taking an active role on both sides and defining how the application looks as well as how it works.',
       requirment:'Proficient understanding of web markup, including HTML5, CSS3, Bootstrap, JavaScript, jQuery, ReactJS, AngularJS, VueJS, etc. Basic understanding of server-side CSS pre-processing platforms, such as LESS and SASS. Proficient',
      },
      {
        id: 2, 
        title: 'frontend',
      Company_name: "TCS", 
      package: '5LPA',
      location: 'Bangalore',
      Dead_line: '12jan2025',
      job_discription:'We are looking for a Front-End Web Developer who is motivated to combine the art of design with the art of programming. Responsibilities will include translation of the UI/UX design wireframes to actual code that will produce visual elements of the application. You will work with the UI/UX designer and bridge the gap between graphical design and technical implementation, taking an active role on both sides and defining how the application looks as well as how it works.',
      requirment:'Proficient understanding of web markup, including HTML5, CSS3, Bootstrap, JavaScript, jQuery, ReactJS, AngularJS, VueJS, etc. Basic understanding of server-side CSS pre-processing platforms, such as LESS and SASS. Proficient',
      },
      {
        id: 3, 
        title: 'frontend',
      Company_name: "TCS", 
      package: '5LPA',
      location: 'Bangalore',
      Dead_line: '12jan2025',
      job_discription:'We are looking for a Front-End Web Developer who is motivated to combine the art of design with the art of programming. Responsibilities will include translation of the UI/UX design wireframes to actual code that will produce visual elements of the application. You will work with the UI/UX designer and bridge the gap between graphical design and technical implementation, taking an active role on both sides and defining how the application looks as well as how it works.',
      requirment:'Proficient understanding of web markup, including HTML5, CSS3, Bootstrap, JavaScript, jQuery, ReactJS, AngularJS, VueJS, etc. Basic understanding of server-side CSS pre-processing platforms, such as LESS and SASS. Proficient',
      }
    
    ];

    
  
    
  return (
    <>

    {postData.map(post => (

      <div key={post.id} className='flex flex-col gap-7 lg:px-[1rem] pb-8'>
      <div className='lg:flex gap-10 '>

      <div className="flex flex-wrap items-center justify-center lg:w-[30%] w-full">
              <label htmlFor="dropzone-file" className="w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 relative">
              
                    
                      <div className="flex flex-col items-center justify-center h-full">
                          <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                          </svg>
                          <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload Image</span> or drag and drop</p>
                          <p className="text-xs text-gray-500">Image (MAX. 800x400px)</p>
                      </div>
                  
                  <input  type="file" className="hidden"  />
              </label>
          </div>


        

        <div className='w-[70%]'>
        <div className=''>
          <div className='text-4xl font-bold'>
            <div type="text" className="  text-2xl  text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " >{post.title}</div>
          </div>
          <h1 className='text-4xl font-bold'>
            <div type="text" id="first_name" className=" text-2xl text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  ">{post.Company_name}</div>
          </h1>
          <ul className=' '>
            <li  className=" text-1xl  text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  ">{post.package}</li>
            
          </ul>


        </div>
        <h1  className="block mb-2 text-xl font-medium text-gray-900  ">Job discription</h1>
        <div  className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " >
          {post.job_discription}
        </div>
      </div>
        

      </div>

      <div>
        <h1  className="block mb-2 text-xl font-medium text-gray-900  ">Job discription</h1>
        <div  className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " >
          {post.job_discription}
        </div>
      </div>

      <div className='hidden'>
        <h1  className="block mb-2 text-xl font-medium text-gray-900 ">Requirment</h1>
        <div  className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 ">
        {post.requirment}
        </div>
        
      </div>

  
        
    </div>
      
    ))}
    </>
  )
}

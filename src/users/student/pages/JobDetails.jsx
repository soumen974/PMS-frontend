import React, { useEffect, useState } from 'react';

export default function JobDetails() {
  document.title = "Apply [Placement Module]";

  const [jobposts, setJobposts] = useState([]);

  useEffect(() => {
    loadJobPost();
  }, []);

  const loadJobPost = () => {
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
      Industry: 'MANAGEMENT',
      location: 'Bangalore',
      HR_Name: 'HRNAME',
      HR_Email: 'avc@gmail.com',
      job_discription: 'We are looking for a Front-End Web Developer who is motivated to combine the art of design with the art of programming. Responsibilities will include translation of the UI/UX design wireframes to actual code that will produce visual elements of the application. You will work with the UI/UX designer and bridge the gap between graphical design and technical implementation, taking an active role on both sides and defining how the application looks as well as how it works.',
      requirment: 'Proficient understanding of web markup, including HTML5, CSS3, Bootstrap, JavaScript, jQuery, ReactJS, AngularJS, VueJS, etc. Basic understanding of server-side CSS pre-processing platforms, such as LESS and SASS. Proficient',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' // Add the URL of the image here
    },
    {
        id: 2,
        title: 'frontend',
        Company_name: "TCS",
        Industry: 'IT',
        location: 'Bangalore',
        HR_Name: 'HRNAME',
        HR_Email: 'avc@gmail.com',
        job_discription: 'We are looking for a Front-End Web Developer who is motivated to combine the art of design with the art of programming. Responsibilities will include translation of the UI/UX design wireframes to actual code that will produce visual elements of the application. You will work with the UI/UX designer and bridge the gap between graphical design and technical implementation, taking an active role on both sides and defining how the application looks as well as how it works.',
        requirment: 'Proficient understanding of web markup, including HTML5, CSS3, Bootstrap, JavaScript, jQuery, ReactJS, AngularJS, VueJS, etc. Basic understanding of server-side CSS pre-processing platforms, such as LESS and SASS. Proficient',
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg'
      },
      {
        id: 3,
        title: 'frontend',
        Company_name: "TCS",
        Industry: 'SALES',
        location: 'Bangalore',
        HR_Name: 'avc',
        HR_Email: 'avc@gmail.com',
        job_discription: 'We are looking for a Front-End Web Developer who is motivated to combine the art of design with the art of programming. Responsibilities will include translation of the UI/UX design wireframes to actual code that will produce visual elements of the application. You will work with the UI/UX designer and bridge the gap between graphical design and technical implementation, taking an active role on both sides and defining how the application looks as well as how it works.',
        requirment: 'Proficient understanding of web markup, including HTML5, CSS3, Bootstrap, JavaScript, jQuery, ReactJS, AngularJS, VueJS, etc. Basic understanding of server-side CSS pre-processing platforms, such as LESS and SASS. Proficient',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAXAZCjamSC-7Z3Xb5MvR_efQUPynuJxkz3bvieGAnxw&s'
      }
  ];

  const labels = {
    title: "Job Title",
    Company_name: "Company",
    Industry: "Industry",
    location: "Location",
    HR_Name: "HR Name",
    HR_Email: "HR Email",
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">AVAILABLE JOBS</h1>
      <hr className="border-gray-300 mb-4" />
      {postData.map((post, index) => (
        <div key={post.id} className={`bg-white rounded-lg shadow-lg mb-8 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'}`}>
          <div className='lg:flex gap-10 p-6'>
            <div className="lg:w-1/3 w-full flex items-center justify-center">
              <label className="w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 relative">
                <img src={post.image} alt="Your Image" className="h-full w-full object-cover rounded-lg" />
              </label>
            </div>

            <div className='lg:w-2/3 w-full'>
              <div>
                {Object.entries(post)
                  .filter(([key]) => !['id', 'job_discription', 'requirment', 'image'].includes(key))
                  .map(([key, value]) => (
                    <ul key={key} className=''>
                      <li className="text-lg text-gray-900 mb-4">
                        <strong>{labels[key]}:</strong> {value}
                      </li>
                    </ul>
                  ))}
              </div>
            </div>
          </div>
          <div>
            <h1 className="block mb-2 text-xl font-medium text-gray-900 px-6">Job Description</h1>
            <div className="p-4 text-sm text-gray-900 bg-gray-100">{post.job_discription}</div>
          </div>

          <div className=''>
            <h1 className="block mb-2 text-xl font-medium text-gray-900 px-6">Requirement</h1>
            <div className="p-4 text-sm text-gray-900 bg-gray-100">
              {post.requirment}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

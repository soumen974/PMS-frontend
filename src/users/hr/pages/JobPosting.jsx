import React, { useState } from 'react';
export default function JobPosting() {
  const [image, setImage] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleRemoveImage = () => {
      setImage(null);
  };

  return (
    <>
   <form className='flex flex-col gap-7 lg:px-[1rem]'>
    <div className='lg:flex '>

    <div className="flex flex-wrap items-center justify-center lg:w-[30%] w-full">
            <label htmlFor="dropzone-file" className="w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 relative">
                {image && (
                    <>
                        <img src={image} alt="Uploaded" className="w-full h-full object-cover rounded-lg" />
                        <button className="absolute top-2 right-2 p-1 bg-white rounded-full text-gray-500 hover:text-red-500" onClick={handleRemoveImage}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </>
                )}
                {!image && (
                    <div className="flex flex-col items-center justify-center h-full">
                        <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500">Image (MAX. 800x400px)</p>
                    </div>
                )}
                <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
            </label>
        </div>


      <div className='grid md:items-center md:justify-center gap-2 p-10 text-center  lg:text-left'>
        <h1 className='text-4xl font-bold'>
          
          <input type="text" id="first_name" class="  text-2xl  text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Job title.." required />
        </h1>
        <h1 className='text-4xl font-bold'>
          <input type="text" id="first_name" class=" text-2xl text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="HR name/company.." required />
        </h1>
        <ul className='grid gap-2 '>
          <input type="text" id="first_name" class=" text-1xl  text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Package.." required />
          <input type="text" id="first_name" class=" text-1xl  text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Location.." required />
          <input type="text" id="first_name" class=" text-1xl  text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Deadline.." required />
        </ul>

      </div>

    </div>

    <div>
      <label for="message" className="block mb-2 text-xlfont-medium text-gray-900  ">Job discription</label>
      <textarea id="message" rows="4" className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Describe..">
      </textarea>
    </div>

    <div>
      <label for="message" className="block mb-2 text-xl font-medium text-gray-900 ">Requirment</label>
      <textarea id="message" rows="4" className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Tech & non tech knowledges..">
      </textarea>
      
    </div>
    <button type="button"  className='flex justify-end' >
      <h1 className="py-2 px-[3rem]   text-xl font-medium hover:text-black focus:outline-none rounded-full border border-gray-200 hover:bg-gray-100 text-white bg-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 ">Post</h1>
    </button>
      
   </form>

    </>
  )
}





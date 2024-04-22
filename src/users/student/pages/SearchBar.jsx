import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  return (
    <div className="mx-auto my-4 w-3/4 lg:w-1/2">
      <div className="relative border rounded-full px-4 py-3 bg-amber-500">
        <input
          type="text"
          className="outline-none flex-grow pl-2 bg-amber-500"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-4">
          <FontAwesomeIcon icon={faSearch} className="text-red-700 p-3 text-xl rounded-full " />
        </div>
      </div>
    </div>


    
  )
}

export default SearchBar
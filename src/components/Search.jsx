import React from 'react'

const person = {
    name: 'Bruce Wayne',
    age: 36,
    location: 'Gotham City'
}
const { name, age, location } = person;
console.log(name);

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    // <div className='text-white text-3xl'>{searchTerm}</div>
    <div className="search">
        <div>
            <img src="search.svg" alt="search" />

            <input type="text"
                placeholder='Seach though thousand of movies'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    </div>
  )
}

export default Search
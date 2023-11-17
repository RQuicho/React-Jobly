import React, {useState} from 'react';

const SearchForm = ({search}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    search(searchTerm.trim());
    setSearchTerm(searchTerm.trim());
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        id='search'
        type='search' 
        name='search'
        placeholder='Enter search term'
        value={searchTerm}
        onChange={handleChange}
      />
      <button type='submit'>Search</button>
    </form>
  )
}

export default SearchForm;
import React,{useState} from 'react'
import Search from 'antd/es/input/Search'
const SearchManagement = ({placeholder, onSearch}) => {
  const [query, setQuery] = useState('');
  const handleSearch = (value)=>{
    setQuery(value);
    onSearch(value);
  }
  return (
    <div>
      <Search placeholder={placeholder} onSearch={handleSearch}/>
    </div>
  )
}

export default SearchManagement
  
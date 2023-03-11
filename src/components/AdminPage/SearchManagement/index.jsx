import React from 'react'
import Search from 'antd/es/input/Search'
const SearchManagement = ({placeholder, onSearch}) => {
  return (
    <div>
      <Search placeholder={placeholder} onSearch={onSearch}/>
    </div>
  )
}

export default SearchManagement
  
import React from 'react'

const Search = (props) => {

    const {term, handleChange} = props

    return (
        <div>
            <div className='search_div'>
                <input className='search' type="text" value={term} onChange={handleChange} placeholder='Search by name...'/>
            </div>
        </div>
    )
}

export default Search
            
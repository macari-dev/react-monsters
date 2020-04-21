import React from 'react'
import './search.styles.css'

export const Search = ({placeholder, value, handler}) => {
    return (
        <input
            className="search"
            type="search"
            placeholder={placeholder}
            value={value}
            onChange={handler} 
        />
    )
}

import React from 'react'
import './card.styles.css'

export const Card = (props) => {
    const { id, name, email } = props.user
    return (
        <div className='card-container' key={id}>
            <img alt="USER-IMG" src={`https://robohash.org/${id}?set=set2&size=180x180`} />
            <h1>{name}</h1>
            <p>{email}</p>
        </div>
    )
}

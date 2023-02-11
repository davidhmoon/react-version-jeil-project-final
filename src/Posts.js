import React from "react"
import ReactDOM from "react-dom"
import {nanoid} from "nanoid"

export default function Posts ( {hotelDisplayArray}) {
    
    
    
    
    return (
        
        <ul className="list-group">
            {hotelDisplayArray.map(x => (
                <li key={nanoid()} className="list-group-item">{x}</li>
            ))}
        </ul>
    )
    
}
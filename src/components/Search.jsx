import React from 'react'

export default function Search({title, changeTitle}) {
    return (
        <div >
           
            <input id="search" value={title} onChange={changeTitle}></input>
        </div>
    )
}

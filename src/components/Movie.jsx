import React from 'react'

export default function Movie({ movie }) {

    return (
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <div>Title: {movie.Title}</div>
            <div>Year: {movie.Year}</div>
        </div>
    )
}

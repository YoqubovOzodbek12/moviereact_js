import React from "react";
import MovieListItem from "../Movie-list-item/MovieListItem";
import './MovieList.css'

const MovieList = ({ data, onDelete, onToggleProp }) => {
    return (
        <div className="movie-list">
            {data.map(item => (
                < MovieListItem
                    key={item.id}
                    name={item.name}
                    viewers={item.viewers}
                    favourite={item.favourite}
                    like={item.like}
                    onDelete={() => onDelete(item.id)}
                    onToggleProp={e => onToggleProp(item.id, e.currentTarget.getAttribute('data-toggle'))}
                />
            ))}
        </div>
    )
}

export default MovieList
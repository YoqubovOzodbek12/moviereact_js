import React from "react";
import { Component } from "react";
import './MovieListItem.css'


const MovieListItem = (props) => {

    const { name, viewers, onDelete, onToggleProp, favourite, like} = props
    return (
        <div>
              <li className={`list-group-item d-flex justify-content-between ${favourite && 'favourite'} ${like && "like"}`}>
                    <span onClick={onToggleProp} className="list-group-item-label" data-toggle='like'>{name}</span>
                    <input className="list-group-item-input" type="number" defaultValue={viewers} />
                    <div className="d-flex justify-content-center align-item-center">
                        <button className="btn-cookie btn-sm" typeof="button" onClick={onToggleProp} data-toggle='favourite'>
                            <i className="fas fa-cookie"></i>
                        </button>
                        <button className="btn-trash btn-sm" type="button" onClick={onDelete}>
                            <i className="fas fa-trash"></i>
                        </button>
                        <i className="fas fa-star"></i>
                    </div>
                </li>
        </div>
    )
}

export default MovieListItem
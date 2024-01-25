import React from "react";
import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import './MovieAddForm.css'

class MovieAddForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            views: ''
        }
    }

    changeHandlerInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    addFormHandle = e =>{
        e.preventDefault()
        this.props.addForm({name: this.state.name, viewers: this.state.views, id: uuidv4() })
        this.setState({
            name: '',
            views: '',
        })
    }

    render() {

        const { name, views } = this.state

        return (
            <div className="movie-add-form">
                <p>Yangi kino qo'shish</p>
                <form className="add-form d-flex" onSubmit={this.addFormHandle}>
                    <input className="form-control new-post-label" type="text" placeholder="Qanday kino?" onChange={this.changeHandlerInput} name="name" value={name}
                    />
                    <input className="form-control new-post-label" type="number" placeholder="Nechi marotaba ko'rilgan?" onChange={this.changeHandlerInput} name="views" value={views} />
                    <button className="btn btn-outline-dark" type="submit">Qo'shish</button>
                </form>
            </div>
        )
    }
}

export default MovieAddForm
import React, { Component } from 'react';
import AppInfo from '../App-info/AppInfo'
import SeacrhPanel from '../Search-panel/SearchPanel'
import AppFilter from '../App-filter/AppFilter'
import MovieList from '../Movie-list/MovieList';
import MovieAddForm from '../Movie-add-form/MovieAddForm'
import { v4 as uuidv4 } from 'uuid';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    id: 1,
                    name: "Ozodbek",
                    viewers: 818,
                    favourite: true,
                    like: false,
                },
                {
                    id: 2,
                    name: "Asilbek",
                    viewers: 398,
                    favourite: false,
                    like: true,
                },
                {
                    id: 3,
                    name: "Muzaffar",
                    viewers: 598,
                    favourite: true,
                    like: false,
                },

            ],
            term: '',
            filter: 'all'
        }
    }

    onDelete = id => {
        this.setState(({ data }) => ({
            data: data.filter(c => c.id !== id),
        }))
    }

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item
            }),
        }))
    }

    addForm = (item) => {
        const newItem = { name: item.name, viewers: item.viewers, id: uuidv4(), favourite: false, like: false }
        this.setState(({ data }) => ({
            data: [...data, { ...newItem }]
        }))
        console.log(item);
    }

    searchHandler = (arr, term) => {
        if (term.length === 0) {
            return arr
        }
        return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
    }

    filterHandler = (arr, filter) => {
        switch (filter) {
            case 'popular':
                return arr.filter(c => c.like)
            case 'mostViewers':
                return arr.filter(c => c.viewers > 800)
            default:
                return arr
        }

    }

    uppateTermHandle = (term) => {
        this.setState({ term })
    }

    updateFilterHandler = (filter) => {
        this.setState({ filter })
    }

    render() {
        const { data, term, filter } = this.state
        const allMovieCount = data.length
        const favouriteMovieCount = data.filter(c => c.favourite).length
        const visibleData = this.filterHandler(this.searchHandler(data, this.state.term), filter)

        return (
            <div className='app font-monospace'>
                <div className='content'>
                    <AppInfo allMovieCount={allMovieCount} favouriteMovieCount={favouriteMovieCount} />
                    <div className='search-panel'>
                        <SeacrhPanel uppateTermHandle={this.uppateTermHandle} />
                        <AppFilter filter={filter} updateFilterHandler={this.updateFilterHandler} />
                    </div>
                    <MovieList onToggleProp={this.onToggleProp} data={visibleData} onDelete={this.onDelete} />
                    <MovieAddForm addForm={this.addForm} />
                </div>
            </div>
        );
    }
}


export default App;

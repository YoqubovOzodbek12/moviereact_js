import React from "react";
import { Component } from "react";
import './SearchPanel.css'

class SearchPanel extends Component {

    constructor(props) {
        super(props)
        this.state = {
            term: '',
        }
    }

    uppateTermHandle = (e) => {
        const term = e.target.value.toLowerCase()
        this.setState({ term })
        this.props.uppateTermHandle(term)
    }

    render() {
        return (
            <div>
                <input type="text" className="form-control search-input" placeholder="Kinolarni qidirish " onChange={this.uppateTermHandle} value={this.state.term} />
            </div>
        )
    }
}

export default SearchPanel
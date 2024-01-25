import React from "react";
import './AppFilter.css'

const AppFilter = ({ updateFilterHandler, filter }) => {
    return (
        <div className="btn-group">
            {btnsArr.map(btn => (
                <button 
                
                key={btn.name} className={`btn ${filter === btn.name ? 'btn-dark' : 'btn btn-outline-dark'}`} onClick={() => updateFilterHandler(btn.name)} >{btn.label}</button>
            ))}
        </div>
    )
}

const btnsArr = [
    {
        name: 'all',
        label: 'Barcha kinolar',
    },
    {
        name: 'popular',
        label: 'Mashxur kinolar',
    },
    {
        name: 'mostViewers',
        label: "Eng ko'p ko'rilgan kinolar"
    }
]

export default AppFilter
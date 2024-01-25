import React from "react";
import './AppInfo.css'

const AppInfo = ({allMovieCount,favouriteMovieCount}) => {
    return (
        <div className="app-info">
            <p className="fs-3 text-uppercase">Barcha kinolar sone: {allMovieCount}</p>
            <p className="fs-4 text-uppercase">Sevimli film: {favouriteMovieCount}</p>
        </div>
    )
}

export default AppInfo
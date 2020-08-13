import React from 'react';
import {NavLink} from 'react-router-dom'

const css = {
    menu: {
        display: "flex",
        justifyContent: "space-evenly",
    },
    menuItem: {
        textDecoration: "none",
        color: "#000",
        fontSize: "22px",
        border: "1px solid rgba(0,0,0,0)",
        padding: "5px 15px"
    },
    menuItemActive: {
        color: "#eee",
        border: "1px solid"
    }
}

const navigation = () => {
    return(
        <>
        <div style={css.menu}>
        <NavLink style={css.menuItem} activeStyle={css.menuItemActive}  to="/">Home</NavLink>
        <NavLink style={css.menuItem} activeStyle={css.menuItemActive} to="/movies">Movies</NavLink>
        </div>
        <hr/>
        </>
        )
}

export default navigation
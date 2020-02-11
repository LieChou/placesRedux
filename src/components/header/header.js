import React from 'react';


function Header() {
    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                <div className="navbar-brand">
                    <img src={require("../../assets/restaurant.svg")} width="50px" height="50px" alt="logo" />
                </div>
                <div className="mx-auto">
                    Places To Eat
                </div>
            </ nav>
        </div>
    )
}

export default Header;
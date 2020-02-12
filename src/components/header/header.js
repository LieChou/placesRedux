import React from 'react';
import styled from 'styled-components';


const Navbar = styled.nav({
    background: '#ECECEC',
    display: 'flex',
    padding: '15px'
})


const Title = styled.h3({
    margin: 'auto',
    fontSize: '1.4em'
})


function Header() {
    return (
        <>
            <Navbar>
                <div>
                    <img src={require("../../assets/restaurant.svg")} width='40px' height='40px' alt="logo" />
                </div>
                <Title>Places To Eat</Title>
            </Navbar>
        </>
    )
}

export default Header;
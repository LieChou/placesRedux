import React from 'react';
import styled from 'styled-components';

const List = styled.div({
    width: '30%',
    maxHeight: '100vh',
    '@media (max-width: 992px)': {
        width: '100%',
    }
})



function RestaurantList() {
    return (
        <List>RestaurantList</List>
    )
}

export default RestaurantList;
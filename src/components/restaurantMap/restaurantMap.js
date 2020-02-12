import React from 'react';
import styled from 'styled-components';

const Map = styled.div({
    width: '70%',
    maxHeight: '100vh',
    '@media (max-width: 992px)': {
        width: '100%',
    }
})


function RestaurantMap() {
    return (
        <Map>Restaurant Map</Map>
    )
}

export default RestaurantMap;


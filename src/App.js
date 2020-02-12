import React from 'react';
import Header from './components/header/header';
import RestaurantMap from './components/restaurantMap/restaurantMap';
import RestaurantList from './components/restaurantList/restaurantList';
import styled from 'styled-components';


const Container = styled.div({
  display: 'flex',
  background: '#ECECEC',
  padding: '15px'
})



function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <RestaurantMap />
        <RestaurantList />
      </Container>
    </div>
  );
}

export default App;

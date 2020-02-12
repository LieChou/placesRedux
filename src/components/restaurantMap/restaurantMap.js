import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import fetchData from '../../store/actions/actionCreators/actionCreators';

const Map = styled.div({
    width: '70%',
    maxHeight: '100vh',
    '@media (max-width: 992px)': {
        width: '100%',
    }
})


class RestaurantMap extends Component {

    componentDidMount = () => {
        this.props.fetchData();
    }

    render() {
        return (
            <Map>Restaurant Map{console.log(this.props.data)}</Map>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.data.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(fetchData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantMap);


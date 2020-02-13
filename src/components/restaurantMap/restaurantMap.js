import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import fetchData from '../../store/actions/actionCreators/actionCreators';
import { GoogleMap, Marker, InfoWindow, withScriptjs, withGoogleMap } from "react-google-maps";

const MapContainer = styled.div({
    width: '70%',
    maxHeight: '100vh',
    '@media (max-width: 992px)': {
        width: '100%',
    }
})



class Map extends Component {

    render() {
        return (
            < GoogleMap
                onChange={this.props.onChange}
                defaultZoom={13}
                center={{ lat: 48.864716, lng: 2.349014 }}
                onClick={this.handleClickOnMap}
            />
        )
    }
}

const WrappedMap = withScriptjs(withGoogleMap(Map))



class RestaurantMap extends Component {

    componentDidMount = () => {
        this.props.fetchData();
        console.log(this.props.data)
    }

    render() {
        return (
            <MapContainer>
                <WrappedMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAPS}`
                    }
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    data={this.props.data}
                />
            </MapContainer>
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


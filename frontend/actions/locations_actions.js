import * as LocationAPIUtil from '../util/locations_api_util';

export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS';
export const RECEIVE_LOCATION = 'RECEIVE_LOCATION';

const receiveLocations = locations => ({
    type: RECEIVE_LOCATIONS,
    locations
})

const receiveLocation = location => ({
    type: RECEIVE_LOCATION,
    location
})

export const fetchLocations = () => dispatch => (
    LocationAPIUtil.fetchLocations()
        .then(locations => dispatch(receiveLocations(locations)))
)

export const fetchLocation = locationId => dispatch => (
    LocationAPIUtil.fetchLocation(locationId)
        .then(location => dispatch(receiveLocation(location)))
)

export const fetchLocations = () => (
    $.ajax({
        url: `/api/locations`,
        method: 'GET',
    })
)

export const fetchLocation = locationId => (
    $.ajax({
        url: `/api/locations/${locationId}`,
        method: 'GET'
    })
)
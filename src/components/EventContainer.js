import React, { PropTypes, Component } from 'react'
import EventTile from './EventTile'

const error = (
    <div className='flex-column error'>
        <h5>No Upcoming Events Found.</h5>
        <p>Check back soon. We're Adding more every day!</p>
    </div>
)

function EventContainer({ events }) {
    const tiles = events.map((event, index) => {
        return React.createElement(EventTile, {
            key: index,
            id: event.id,
            event: event.event,
            startDate: event.start_date,
            bannerImage: event.banner_image.imageURL,
            ticketLink: event.ticket_link,
            venue: event.venue.venue,
            venueId: event.venue.id,
            address: event.venue.address
        })
    })

    return (
        <div className='tile-container'>
            {/*events.length == 0 ? error : tiles*/}
            { tiles }
        </div>
    )
}

EventContainer.propTypes = {
    events: PropTypes.array.isRequired
}

EventContainer.defaultProps = {
    events: []
}

export default EventContainer
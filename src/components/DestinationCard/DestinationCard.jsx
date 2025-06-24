import React, { Component } from 'react'
import './DestinationCard.css'
class DestinationCard extends Component {
    render() {
        const { destinationDetails } = this.props;
        const { name, imgUrl } = destinationDetails
        return (
            <li className="destination-item">
                <img src={imgUrl} alt={name} className="destination-image" />
                <h3 className="name">{name}</h3>
            </li>
        )
    }
}

export default DestinationCard
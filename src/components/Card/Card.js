import React from 'react';
import cardImage from './card2.jpg';
import './Card.css';

class Card extends React.Component {
    render() {
        return (
            <div className="w3-half zoom">
                <div className="w3-white w3-text-grey w3-card-4 w3-margin-bottom">
                    <div className="w3-display-container">
                        <img src={this.props.imgsrc} className="card-image" alt="Avatar" />
                        <div className="w3-display-bottomleft w3-container w3-text-black">
                            <h2></h2>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

};

export default Card;
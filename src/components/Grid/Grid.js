import React from 'react';
import Card from '../Card/Card';
import './Grid.css';
import images from '../../images/images'


class Grid extends React.Component {
    render() {
        return (
                <div className="grid-parent-style w3-content  w3-margin-top">
                <div className="w3-row-padding">
                {images.map(img_data => {
                    return <Card imgsrc={img_data.content} key={img_data.id}/>;
                })}
                </div>
            </div>
            )       

    }

};

export default Grid;
import React from 'react';
import Card from '../Card/Card';
import './Grid.css';
import images from '../../images/images'


class Grid extends React.Component {
    columns(array, cols){
        // get length of array
        let cards_per_col = array.length/cols;
        //slice into cols
        let first = array.slice(0,Math.ceil(cards_per_col));
        let last = array.slice(array.length-Math.ceil(cards_per_col),array.length);
        let mid = array.slice(Math.ceil(cards_per_col),array.length-Math.ceil(cards_per_col));
        //return list of columns
        return [first, mid, last]
    }
    render() {
        let array_cols = this.columns(images, 3);
        return (
                <div className="grid-parent-style w3-content  w3-margin-top">
                <div className="w3-third w3-row-padding">
                {array_cols[0].map(img_data => {
                    return <Card imgsrc={img_data.content} key={img_data.id}/>;
                })}
                </div>
                <div className="w3-third w3-row-padding">
                {array_cols[1].map(img_data => {
                    return <Card imgsrc={img_data.content} key={img_data.id}/>;
                })}
                </div>
                <div className="w3-third w3-row-padding">
                {array_cols[2].map(img_data => {
                    return <Card imgsrc={img_data.content} key={img_data.id}/>;
                })}
                </div>
            </div>
            )       

    }

};

export default Grid;
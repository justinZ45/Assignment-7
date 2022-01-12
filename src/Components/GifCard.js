import React, { Component } from "react";
import './GifCard.css';


class GifCard extends Component   //receive gif info as props (presentational component)
{
    render() {
    return(

       <div className="gif">
       <p> {this.props.imagetitle}</p>
       <div id = "img">
       <img id  = "gif-desc" src = {this.props.imageSource}/>
       </div>
       </div>
    );

    }

}




export default GifCard
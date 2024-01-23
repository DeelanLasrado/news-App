import React, { Component } from "react";



export default class NewsItem extends Component {
     
    
  render() {
   


    let {title,description,imageUrl,newsUrl,author,date}=this.props;
    return (
        
      <div>
        <div className="card my-3">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <p className="card-text"><small className="text-body-secondary">By: {author? author:"unknown"} &nbsp;&nbsp; on: {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

import React from "react";
import "./Style.css";
import ReactStars from "react-stars";

const Card = ({ image, tittle, descrption,  }) => {
  return (
        <div className="card-cadre">
    <div className="card-containr">
      <div>
        <img style={{width:'250px' , height:'275px'}} src={image} alt={tittle} />
      </div>
      <h6 >{tittle}</h6>
      <ReactStars className="icon-card"  />
      <p>{descrption}</p>
      {/* <link rel="stylesheet" href="" /> */}
    </div>
    </div>
  );
};

export default Card;

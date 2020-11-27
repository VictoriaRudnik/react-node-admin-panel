import React from "react";
import "./style.css";

const BrandItem = (props) => {
  const { item, index } = props;
 

   
  return (
    <>
    <div id="brand-item__item-color" className="brand-item__container">
      <div className="brand-item__container-image">
        <div> 
          <img className="brand-item__image" src={item.image} alt={index}/>
        </div>
        <div>
          <p className="brand-item__p">{item.title}</p>
        </div>
      </div>
      <div className="brand-item__container-menu">
        <p className="brand-item_p">Addresses</p>
        <p className="brand-item_p">Edit</p>
        <p className="brand-item_p">Add place</p>
        <p className="brand-item_p">View menu</p>
        <p className="brand-item_p">View offers</p>
        <p className="brand-item_p">Add ofer</p>
      </div>
    </div>
    </>
   
  );
};

export default BrandItem;

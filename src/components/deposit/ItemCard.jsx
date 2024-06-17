import React from "react";

const ItemCard = (props) => {
  return (
    <a
      title={props?.title}
      className={`hlk_selectCard ${props?.tab=== props?.id && "selected"}`}
      href="javascript:;"
      onClick={()=> props?.onClick(props?.id)}
    >
      <img className="img-thumbnail" src={props?.src} />
      <input type="radio" name="rdoCardType" className="ratio_deposite" />
    </a>
  );
};

export default ItemCard;

import React from "react";
import "./CartModal.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function CartModal({ closeCartModal, addToCart }) {
  return (
    <div className="cartItems closed">
      <div className="itemContainer">
        Your Cart
        <span className="cross" onClick={closeCartModal}>
          <AiOutlineCloseCircle />
        </span>
      </div>
    </div>
  );
}

//`Photo ${photo.title} has been added to cart`

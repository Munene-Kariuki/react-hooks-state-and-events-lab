import React, {useState} from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState(false)

  const itemClass = cart ? 'in-cart' : ""

  function handleClick() {
    setCart(cart => !cart)
  }

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{cart ? "Remove from cart" : "Add to cart"}</button>
    </li>
  );
}

export default Item;

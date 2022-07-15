import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [mode, setmode] = useState(false)
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const handleClick = () => {
    setmode(mode => !mode)
  }
  const appClass = mode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{appClass}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

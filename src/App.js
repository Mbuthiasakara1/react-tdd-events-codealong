import { useState } from "react";

function App() {
  const [pepperoniIsChecked, setpepperoniIsChecked] = useState(false);

  function togglePepperoni(e) {
    setpepperoniIsChecked(e.target.checked);
  }
  return (
    <div>
      <h1>Select Pizza Toppings</h1>
      <input
        onChange={togglePepperoni}
        type="checkbox"
        id="pepperoni"
        checked={pepperoniIsChecked}
        aria-checked={pepperoniIsChecked}
      />
      <label htmlFor="pepperoni">Add Pepperoni</label>
      <h2>Your Toppings:</h2>
      <ul>
        <li>Cheese</li>
        {pepperoniIsChecked ? <li>Pepperoni</li> :null}
      </ul>
    </div>
  );
}

export default App;

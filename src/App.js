import './App.css';
import { useState } from 'react';
function App() {
  const [listVal, setListVal] = useState("");
  const [list, setList] = useState([]);
  const addList = (e) => {
    console.log(listVal);
    setList([...list, listVal]);
    // setList(e.target.value);
  };

  const removeList = (id) => {
    let newArr = list.filter((item , index) => {
      if(index !== id) {
        return index !== id
      }
    
    });
    setList(newArr);
  };
  return (
    <div className="App">
      <input
        type="text"
        value={listVal}
        onChange={(e) => setListVal(e.target.value)}
      />

      <ul>
        {list.map((item, index) => (
          <li id={index}>
            {item} {index}
            <button onClick={(e) => removeList(index)}>Remove</button>
          </li>
        ))}
      </ul>

      <button onClick={addList}>Add</button>
    </div>
  );
}

export default App;

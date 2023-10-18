import { useState } from 'react';
import './index.css';

const App = () => {
  const [leftData, setLeftData] = useState(["Item1", "Item2", "Item3", "Item4"]);
  const [rightData, setRightData] = useState([]);
  const [checkedItems, setCheckedItems] = useState(new Set());

  const handleChange = (e) => {
    const item = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setCheckedItems((prevCheckedItems) => new Set(prevCheckedItems).add(item));
    } else {
      const updatedCheckedItems = new Set(checkedItems);
      updatedCheckedItems.delete(item);
      setCheckedItems(updatedCheckedItems);
    }
  }

  const leftToRight = () => {
    setLeftData((prevLeftData) => prevLeftData.filter(item => !checkedItems.has(item)));
    setRightData((prevRightData) => [...prevRightData, ...Array.from(checkedItems)]);
    setCheckedItems(new Set());
  }

  const rightToLeft = () => {
    setRightData((prevRightData) => prevRightData.filter(item => !checkedItems.has(item)));
    setLeftData((prevLeftData) => [...prevLeftData, ...Array.from(checkedItems)]);
    setCheckedItems(new Set());
  }

  return (
    <div className='container'>
      <div className='left-box'>
        <ul>
          {leftData.map((item, index) => (
            <li key={index + 1}>
              <label>
                <input type="checkbox" value={item} checked={checkedItems.has(item)} onChange={handleChange} />
                {item}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="buttons">
        <button onClick={leftToRight}>Left To Right</button>
        <button onClick={rightToLeft}>Right To Left</button>
      </div>
      <div className='right-box'>
        <ul>
          {rightData.map((item, index) => {
            return (
              <li key={index + 1}>
                <label>
                  <input type="checkbox" value={item} checked={checkedItems.has(item)} onChange={handleChange} />
                  {item}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )

}
export default App;


import React, { useState } from 'react';



const SourceList = () => {
  const [sourceList, setSourceList] = useState(['Item 1', 'Item 2', 'Item 3']);

  return (
    <div className='box1'>
      <h2>Source List</h2>
      <ul> 
        {sourceList.map((item, index) => (
          <li key={index}>
            <input type="checkbox" />
            {item}
          </li>
        ))}
         <button>Left to Right</button>
      <button>Right to left</button>
      </ul>

     
    </div>
    
  );
  
};


export default SourceList;
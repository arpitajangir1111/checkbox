import React, { useState } from 'react';

const DestinationList = () => {
  const [destinationList, setDestinationList] = useState([]);

  return (
    <div className='box2'>
      <h2>Destination List</h2>
      <ul>
        {destinationList.map((item, index) => (
          <li key={index}>
            <input type="checkbox" checked />
            {item}
          </li>
          
        ))}
      </ul>
      
    </div>
  );
};

export default DestinationList;
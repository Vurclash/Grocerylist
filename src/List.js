import React from 'react';

const List = (props) => (
  <div>
    <h2>{props.name}</h2>
    <ul>
      {props.items.map( item => <li key={item.id}>{item.name}</li>) }
    </ul>
  </div>
);

export default List;
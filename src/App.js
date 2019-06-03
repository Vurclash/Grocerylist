import React from 'react';
import List from './List';
import GroceryForm from './GroceryForm' ;

class App extends React.Component{
  state = {
    groceries: [
      {id: 1, name: "Milk", complete: false, },
      {id: 2, name: "Cookies", complete: false, },
      {id: 3, name: "Naan bread", complete: false, },
    ]
  };

  renderGroceries = () => {
    const { groceries, } = this.state;
    return groceries.map( todo => <li key={groceries.id}>{groceries.name}</li>
    )
  };

  render() {
    const { groceries } = this.state;

    return(
      <div>
        <GroceryForm />
        <List name="Groceries" items={groceries} />
      </div>
    );
  }
}

export default App;

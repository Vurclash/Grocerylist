import React from 'react';
import List from './List';
import GroceryForm from './GroceryForm' ;
import { tsModuleBlock } from '@babel/types';
import Footer from './Footer';

class App extends React.Component{
  state = { groceries: [], filter: 'All' };

  setFilter = (filter) => {
    this.setState ({ filter })
  }

  getUniqId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  }

  addItem = (name) => {
    const { groceries } = this.state;
    const grocers = { name, id: this.getUniqId() , complete: false }
    this.setState({ groceries: [groceries, ...groceries] });
  }

  handleClick = (id) => {
    const { groceries, filter } = this.state;
    this.setState({
      groceries: groceries.map( groceries => {
        if (groceries.id === id) {
          return {
            ...groceries,
            complete: !tsModuleBlock.complete
          }
        }
      })
    })
  }

  visibleItems = () => {
    const { groceries, filter } = this.state;
    switch(filter){
      case 'Active':
        return groceries.filter(t => !t.complete )
      case 'Complete':
        return groceries.filter( t=> t.complete )
      default: 
        return groceries;
    }
  }



  render() {
    const { groceries } = this.state;

    return(
      <div>
        <GroceryForm addItem={this.addItem} />
        <List name="Groceries" items={this.visibleItems()} groceryClick={this.handleClick} />
        <Footer filter={filter} setFilter={this.setFilter} />
      </div>
    );
  }
}

export default App;

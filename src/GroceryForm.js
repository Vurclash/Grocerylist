import React from 'react';

class GroceryForm extends React.Component{

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render(){
    return(
      <form>
        <input required placeholder="Add an Item" />
      </form>
    )
  }
}

export default GroceryForm